import { useEffect } from "react";

import { subscribeToEvent, unsubscribeFromEvent } from "@/helpers/eventManager";

/**
 * useSharedEventListener
 *
 * React hook that subscribes a handler to an event using a shared event bus,
 * avoiding redundant native `addEventListener` calls per event type per target.
 *
 * @param {EventTarget | React.RefObject<EventTarget>} target - Target element or ref.
 * @param {string} eventType - The type of event (e.g., 'scroll', 'keydown').
 * @param {(e: Event) => void} handler - Event handler to invoke.
 * @param {boolean} [enabled=true] - Whether the listener should be active.
 * @param {AddEventListenerOptions} [options={ passive: true }] - Native event listener options.
 *
 * @example
 * useSharedEventListener(window, 'resize', handleResize);
 */
export function useSharedEventListener(
  target: EventTarget | React.RefObject<EventTarget | null>,
  eventType: string,
  handler: (e: Event) => void,
  enabled: boolean = true,
  options?: AddEventListenerOptions,
) {
  useEffect(() => {
    const resolvedTarget =
      target && "current" in target ? target.current : target;

    if (!enabled || !resolvedTarget) return;

    const eventOptions = { passive: true, ...options };

    subscribeToEvent(resolvedTarget, eventType, handler, eventOptions);
    return () => {
      unsubscribeFromEvent(resolvedTarget, eventType, handler);
    };
  }, [
    target && "current" in target ? target.current : target,
    eventType,
    enabled,
    handler,
    JSON.stringify(options),
  ]);
}
