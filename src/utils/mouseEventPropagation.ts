import { RefObject } from 'react';

export default function propagateMouseEvent(event: MouseEvent, targetRef: RefObject<HTMLDivElement | null>) {
  const target = targetRef.current;
  if (target) {
    target.dispatchEvent(new MouseEvent(event.type, event));
  }
}
