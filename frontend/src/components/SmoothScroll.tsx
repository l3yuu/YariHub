import { useEffect, type ReactNode } from 'react';
import { cancelFrame, frame } from 'framer-motion';
import { ReactLenis, useLenis } from 'lenis/react';

/** Keeps Lenis scroll in sync with Framer Motion's animation frame loop. */
function LenisFramerSync() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const instance = lenis;

    function onFrame({ timestamp }: { timestamp: number }) {
      instance.raf(timestamp);
    }

    frame.update(onFrame, true);
    return () => cancelFrame(onFrame);
  }, [lenis]);

  return null;
}

type SmoothScrollProps = {
  children: ReactNode;
};

const SmoothScroll = ({ children }: SmoothScrollProps) => (
  <ReactLenis
    root
    options={{
      lerp: 0.08,
      duration: 1.35,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
      autoRaf: false,
    }}
  >
    <LenisFramerSync />
    {children}
  </ReactLenis>
);

export default SmoothScroll;
