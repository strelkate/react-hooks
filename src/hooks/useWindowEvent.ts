import { useEffect } from 'react';

type WindowEventType = keyof WindowEventMap;
type WindowEventListener = (event: Event) => void;

export function useWindowEvent(
  type: WindowEventType,
  listener: WindowEventListener,
  options?: boolean | AddEventListenerOptions
) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener(type, listener, options);
      return () => window.removeEventListener(type, listener, options);
    }
  }, [type, listener, options]);
} 