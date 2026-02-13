import { useRef, useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

interface BlurTextProps {
    text?: string;
    delay?: number;
    className?: string;
    animateBy?: 'words' | 'letters';
    direction?: 'top' | 'bottom';
    threshold?: number;
    rootMargin?: string;
    animationFrom?: Record<string, any>;
    animationTo?: Record<string, any>[];
    easing?: string; // easeOutCubic not supported by spring directly usually, handled by config
    onAnimationComplete?: () => void;
}

const BlurText: React.FC<BlurTextProps> = ({
    text = '',
    delay = 200,
    className = '',
    animateBy = 'words', // 'words' or 'letters'
    direction = 'top', // 'top' or 'bottom'
    threshold = 0.1,
    rootMargin = '0px',
    animationFrom,
    animationTo,
    easing = 'easeOutCubic',
    onAnimationComplete,
}) => {
    const elements = animateBy === 'words' ? text.split(' ') : text.split('');
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLParagraphElement>(null);
    const animatedCount = useRef(0);

    // Default animations based on direction
    const defaultFrom =
        direction === 'top'
            ? { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,-50px,0)' }
            : { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,50px,0)' };

    const defaultTo = [
        {
            filter: 'blur(5px)',
            opacity: 0.5,
            transform: direction === 'top' ? 'translate3d(0,5px,0)' : 'translate3d(0,-5px,0)',
        },
        { filter: 'blur(0px)', opacity: 1, transform: 'translate3d(0,0,0)' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(ref.current!);
                }
            },
            { threshold, rootMargin }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    const springs = useSpring({
        from: animationFrom || defaultFrom,
        to: inView
            ? async (next: (arg: any) => Promise<void>) => {
                for (const step of (animationTo || defaultTo)) {
                    await next(step);
                }
                animatedCount.current += 1;
                if (animatedCount.current === elements.length && onAnimationComplete) {
                    onAnimationComplete();
                }
            }
            : animationFrom || defaultFrom,
        delay: (i: number) => delay + i * 150,
        config: { easing: (t: number) => t }, // simplified for example
    });

    return (
        <p ref={ref} className={`blur-text ${className} flex flex-wrap`}>
            {elements.map((element, index) => (
                <animated.span
                    key={index}
                    style={{
                        ...springs as any, // TypeScript workaround for spring styles
                        display: 'inline-block',
                        willChange: 'transform, filter, opacity'
                    }}
                    className="inline-block transition-transform will-change-[transform,filter,opacity]"
                >
                    {element === ' ' ? '\u00A0' : element}
                    {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
                </animated.span>
            ))}
        </p>
    );
};

export default BlurText;
