import '@/styles/hero-name.css';
import { m } from 'motion/react';
import { appear } from '@/utils/motion';
import { useSimulation } from '@/components/providers/SimulationProvider';
import { useEffect, useRef, useCallback } from 'react';

function HeroName() {
  const spanRefs = useRef<Array<HTMLSpanElement>>([]);
  const { lowerBrightnessHover } = useSimulation();

  function spanRef(span: HTMLSpanElement) {
    if (span && !spanRefs.current.includes(span)) {
      spanRefs.current.push(span);
    }
  }

  const bounce = useCallback(
    (span: HTMLElement | undefined) => {
      if (!span) return;
      if (!span.classList.contains('bounce')) {
        if (span.classList.contains('gradient-letter')) {
          const root = getComputedStyle(document.documentElement);
          span.style.color = `hsl(${root.getPropertyValue('--accent')})`;
        }
        span.classList.add('bounce');
        lowerBrightnessHover(span);
        setTimeout(function () {
          span.classList.remove('bounce');
          if (span.classList.contains('gradient-letter')) {
            span.style.color = 'transparent';
          }
        }, 1000);
      }
    },
    [lowerBrightnessHover],
  );

  useEffect(() => {
    const spans = spanRefs.current;
    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      bounce(target);
    };

    spans.forEach((span) => {
      span.addEventListener('mouseover', handleMouseOver);
    });

    return () => {
      spans.forEach((span) => {
        span.removeEventListener('mouseover', handleMouseOver);
      });
    };
  }, [bounce]);

  return (
    <h1 className='mt-2 flex select-none flex-wrap font-sf-pro-display text-[40px] font-extrabold sm:text-[60px] lg:text-[80px] lg:leading-[98px] xs:text-[50px]'>
      <div>
        <m.span
          ref={spanRef}
          className='inline-block transition-colors hover:text-accent'
          variants={appear(0.1, 0.5, () => bounce(spanRefs.current[0]))}
          initial='hidden'
          animate='show'
        >
          H
        </m.span>
        <m.span
          ref={spanRef}
          className='inline-block transition-colors hover:text-accent'
          variants={appear(0.2, 0.5, () => bounce(spanRefs.current[1]))}
          initial='hidden'
          animate='show'
        >
          i
        </m.span>
        <m.span
          ref={spanRef}
          className='inline-block transition-colors hover:text-accent'
          variants={appear(0.3, 0.5, () => bounce(spanRefs.current[2]))}
          initial='hidden'
          animate='show'
        >
          ,&nbsp;
        </m.span>
      </div>
      <div>
        <m.span
          ref={spanRef}
          className='inline-block transition-colors hover:text-accent'
          variants={appear(0.4, 0.5, () => bounce(spanRefs.current[3]))}
          initial='hidden'
          animate='show'
        >
          I
        </m.span>
        <m.span
          ref={spanRef}
          className='inline-block transition-colors hover:text-accent'
          variants={appear(0.5, 0.5, () => bounce(spanRefs.current[4]))}
          initial='hidden'
          animate='show'
        >
          &apos;
        </m.span>
        <m.span
          ref={spanRef}
          className='inline-block transition-colors hover:text-accent'
          variants={appear(0.6, 0.5, () => bounce(spanRefs.current[5]))}
          initial='hidden'
          animate='show'
        >
          m&nbsp;
        </m.span>
      </div>
      <div className='flex'>
        <span className='gradient-animation from-primary to-accent bg-[length:200%] bg-clip-text text-transparent bg-gradient-120'>
          <m.span
            ref={spanRef}
            className='gradient-letter inline-block transition-colors hover:text-accent'
            variants={appear(0.5, 0.5, () => bounce(spanRefs.current[6]))}
            initial='hidden'
            animate='show'
          >
            M
          </m.span>
          <m.span
            ref={spanRef}
            className='gradient-letter inline-block transition-colors hover:text-accent'
            variants={appear(0.6, 0.5, () => bounce(spanRefs.current[7]))}
            initial='hidden'
            animate='show'
          >
            i
          </m.span>
          <m.span
            ref={spanRef}
            className='gradient-letter inline-block transition-colors hover:text-accent'
            variants={appear(0.7, 0.5, () => bounce(spanRefs.current[8]))}
            initial='hidden'
            animate='show'
          >
            c
          </m.span>
          <m.span
            ref={spanRef}
            className='gradient-letter inline-block transition-colors hover:text-accent'
            variants={appear(0.8, 0.5, () => bounce(spanRefs.current[9]))}
            initial='hidden'
            animate='show'
          >
            h
          </m.span>
          <m.span
            ref={spanRef}
            className='gradient-letter inline-block transition-colors hover:text-accent'
            variants={appear(0.9, 0.5, () => bounce(spanRefs.current[10]))}
            initial='hidden'
            animate='show'
          >
            a
          </m.span>
          <m.span
            ref={spanRef}
            className='gradient-letter inline-block transition-colors hover:text-accent'
            variants={appear(1.0, 0.5, () => bounce(spanRefs.current[11]))}
            initial='hidden'
            animate='show'
          >
            e
          </m.span>
          <m.span
            ref={spanRef}
            className='gradient-letter inline-block transition-colors hover:text-accent'
            variants={appear(1.1, 0.5, () => bounce(spanRefs.current[12]))}
            initial='hidden'
            animate='show'
          >
            l
          </m.span>
        </span>
        <m.span
          ref={spanRef}
          className='inline-block transition-colors hover:text-accent'
          variants={appear(1.9, 0, () => bounce(spanRefs.current[13]))}
          initial='hidden'
          animate='show'
        >
          .
        </m.span>
      </div>
    </h1>
  );
}

export { HeroName };
