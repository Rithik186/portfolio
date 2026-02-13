import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation, Variant } from 'framer-motion';

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    baseOpacity?: number;
    enableBlur?: boolean;
    baseRotation?: number;
    blurStrength?: number;
    rotationStrength?: number;
    containerClassName?: string;
    textClassName?: string;
    delay?: number;
    duration?: number;
}

export const ScrollReveal = ({
    children,
    width = "fit-content",
    baseOpacity = 0.1,
    enableBlur = true,
    baseRotation = 3,
    blurStrength = 10,
    rotationStrength = 15,
    containerClassName = "",
    textClassName = "",
    delay = 0,
    duration = 1
}: ScrollRevealProps) => {
    const mainRef = useRef(null);
    const isInView = useInView(mainRef, { once: true, margin: "-10%" });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <div ref={mainRef} className={`relative overflow-hidden ${containerClassName}`} style={{ width }}>
            <motion.div
                variants={{
                    hidden: { opacity: baseOpacity, y: 75, filter: enableBlur ? `blur(${blurStrength}px)` : "none", rotateX: rotationStrength },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)", rotateX: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration, ease: "easeOut", delay }}
                className={textClassName}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default ScrollReveal;
