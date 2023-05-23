import { RefObject } from 'react';

export default function propagateMouseEvent(event: MouseEvent, targetRef: RefObject<HTMLElement>) {
  const target = targetRef.current;
  if (target) {
    target.dispatchEvent(new MouseEvent(event.type, event));
  }
}
