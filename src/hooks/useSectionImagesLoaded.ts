import { useLoadingSection, useSectionLoadReporter } from "@/providers/section";

import { useEffect, useRef } from "react";

import { Section } from "@/consts/sections";

/**
 * Waits until all <img> elements inside the section with the given ID are loaded,
 * then calls reportSectionLoaded(sectionId) whenever that section becomes active again.
 */
export function useSectionImagesLoaded(sectionId: Section) {
  const { reportSectionLoaded } = useSectionLoadReporter();
  const { loadingSection } = useLoadingSection();
  const timeoutRef = useRef<NodeJS.Timeout>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Run only when this section is the one currently loading
    if (loadingSection !== sectionId) return;

    const sectionEl = document.getElementById(sectionId);
    if (!sectionEl) {
      setTimeout(() => {
        reportSectionLoaded(sectionId);
      }, 0);
      return;
    }

    const images = Array.from(sectionEl.querySelectorAll("img"));

    // If there are no images, mark as loaded immediately
    if (images.length === 0) {
      setTimeout(() => {
        reportSectionLoaded(sectionId);
      }, 0);
      return;
    }

    // Check if all images are already cached (loaded)
    const allComplete = images.every((img) => img.complete);
    if (allComplete) {
      setTimeout(() => {
        reportSectionLoaded(sectionId);
      }, 0);
      return;
    }

    // Create promises with timeout and error handling
    const promises = images.map((img) => {
      if (img.complete || img.loading === "lazy") {
        return Promise.resolve();
      }
      return new Promise<void>((resolve) => {
        const onLoadOrError = () => {
          img.removeEventListener("load", onLoadOrError);
          img.removeEventListener("error", onLoadOrError);
          resolve();
        };

        img.addEventListener("load", onLoadOrError);
        img.addEventListener("error", onLoadOrError);

        // Fallback timeout - resolve after 10 seconds even if image fails
        timeoutRef.current = setTimeout(() => {
          img.removeEventListener("load", onLoadOrError);
          img.removeEventListener("error", onLoadOrError);
          console.warn(`Image loading timeout for ${img.src}`);
          resolve();
        }, 10000);
      });
    });

    Promise.all(promises)
      .then(() => {
        if (mountedRef.current) {
          reportSectionLoaded(sectionId);
        }
      })
      .catch((error) => {
        console.error("Error in image loading promises:", error);
        if (mountedRef.current) {
          reportSectionLoaded(sectionId);
        }
      });

    // Cleanup function
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [sectionId, loadingSection, reportSectionLoaded]);
}
