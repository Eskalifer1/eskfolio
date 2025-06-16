/**
 * A shared event listener manager for any EventTarget and event type.
 * Ensures that only one native event listener is attached per event type per target,
 * while supporting multiple subscribers internally.
 */

type Handler = (event: Event) => void;

type ListenerEntry = {
  handlers: Set<Handler>;
  listener: (e: Event) => void;
  options: AddEventListenerOptions;
};

type EventListenerMap = Map<EventTarget, Map<string, ListenerEntry>>;

const listenerMap: EventListenerMap = new Map();

/**
 * Subscribes a handler to a specific event type on a given target.
 * Internally reuses a shared listener to reduce duplicate `addEventListener` calls.
 *
 * @param {EventTarget} target - The event target (e.g., window, HTMLElement).
 * @param {string} eventType - The event type (e.g., 'scroll', 'keydown').
 * @param {Function} handler - The handler to execute on the event.
 * @param {AddEventListenerOptions} [options={ passive: true }] - Event listener options.
 */
export function subscribeToEvent(
  target: EventTarget,
  eventType: string,
  handler: Handler,
  options: AddEventListenerOptions = { passive: true },
) {
  let eventMap = listenerMap.get(target);
  if (!eventMap) {
    eventMap = new Map();
    listenerMap.set(target, eventMap);
  }

  let entry = eventMap.get(eventType);

  if (!entry) {
    const handlers = new Set<Handler>();
    const listener = (e: Event) => {
      handlers.forEach((fn) => fn(e));
    };

    target.addEventListener(eventType, listener, options);
    entry = { handlers, listener, options };
    eventMap.set(eventType, entry);
  }

  entry.handlers.add(handler);
}

/**
 * Unsubscribes a handler from a specific event type on a given target.
 * If no handlers remain for the event, the native listener is also removed.
 *
 * @param {EventTarget} target - The event target (e.g., window, HTMLElement).
 * @param {string} eventType - The event type (e.g., 'scroll', 'keydown').
 * @param {Function} handler - The handler to remove.
 */
export function unsubscribeFromEvent(
  target: EventTarget,
  eventType: string,
  handler: Handler,
) {
  const eventMap = listenerMap.get(target);
  if (!eventMap) return;

  const entry = eventMap.get(eventType);
  if (!entry) return;

  entry.handlers.delete(handler);

  if (entry.handlers.size === 0) {
    target.removeEventListener(eventType, entry.listener, entry.options);
    eventMap.delete(eventType);
  }

  if (eventMap.size === 0) {
    listenerMap.delete(target);
  }
}
