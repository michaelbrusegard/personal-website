'use client';

import { Component, type ReactNode } from 'react';

// React Three Fiber rethrows WebGL errors out of <Canvas>, which would take
// down the whole page on devices without WebGL. Render nothing instead.
class CanvasBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

export { CanvasBoundary };
