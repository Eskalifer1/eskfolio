import { useEffect } from "react";

export function useSectionMount(
  id: string,
  onMount: () => void,
  // eslint-disable-next-line
  deps: any[] = [],
) {
  useEffect(() => {
    const el = document.getElementById(id);
    if (el) onMount();
    else {
      const observer = new MutationObserver(() => {
        const el = document.getElementById(id);
        if (el) {
          onMount();
          observer.disconnect();
        }
      });

      observer.observe(document.body, { childList: true, subtree: true });
      return () => observer.disconnect();
    }
    // eslint-disable-next-line
  }, deps);
}
