type ScrollHandler = (event: Event) => void;

type ListenerEntry = {
  handlers: Set<ScrollHandler>;
  listener: (e: Event) => void;
  options: AddEventListenerOptions;
};

type ListenerMap = Map<HTMLElement, ListenerEntry>;

const listenerMap: ListenerMap = new Map();

/**
 * Subscribes a handler to a container's scroll event, using a shared listener.
 * Ensures only one native event listener is attached per container.
 *
 * @param container - The scrollable element.
 * @param handler - The function to call on scroll.
 * @param options - Event listener options (defaults to { passive: true }).
 */
export function subscribeToScroll(
  container: HTMLElement,
  handler: ScrollHandler,
  options: AddEventListenerOptions = { passive: true },
) {
  let entry = listenerMap.get(container);

  if (!entry) {
    const handlers = new Set<ScrollHandler>();
    const listener = (e: Event) => {
      handlers.forEach((fn) => fn(e));
    };

    container.addEventListener("scroll", listener, options);
    entry = { handlers, listener, options };
    listenerMap.set(container, entry);
  }

  entry.handlers.add(handler);
}

/**
 * Unsubscribes a handler from a container's scroll event.
 * Removes the shared listener if no handlers remain.
 *
 * @param container - The scrollable element.
 * @param handler - The function to remove.
 */
export function unsubscribeFromScroll(
  container: HTMLElement,
  handler: ScrollHandler,
) {
  const entry = listenerMap.get(container);
  if (!entry) return;

  entry.handlers.delete(handler);

  if (entry.handlers.size === 0) {
    container.removeEventListener("scroll", entry.listener, entry.options);
    listenerMap.delete(container);
  }
}
