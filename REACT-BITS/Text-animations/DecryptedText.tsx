import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface DecryptedTextProps {
    text: string;
    speed?: number;
    maxIterations?: number;
    sequential?: boolean;
    revealDirection?: 'start' | 'end' | 'center';
    useOriginalCharsOnly?: boolean;
    characters?: string;
    className?: string;
    animateOn?: 'view' | 'hover';
    revealVideo?: boolean;
    parentClassName?: string;
    encryptedClassName?: string;
}

export default function DecryptedText({
    text,
    speed = 50,
    maxIterations = 10,
    sequential = true,
    revealDirection = 'start',
    useOriginalCharsOnly = false,
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=[]{}|;:,.<>?',
    className = '',
    parentClassName = '',
    encryptedClassName = '',
    animateOn = 'hover',
    ...props
}: DecryptedTextProps) {
    const [displayText, setDisplayText] = useState(text);
    const [isHovering, setIsHovering] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        let interval: any;
        let currentIteration = 0;

        const getRandomChar = () =>
            characters[Math.floor(Math.random() * characters.length)];

        const animate = () => {
            if (currentIteration >= maxIterations) {
                setDisplayText(text);
                return;
            }

            setDisplayText(
                text
                    .split('')
                    .map((char, index) => {
                        if (char === ' ') return char;
                        if (currentIteration >= maxIterations) return char;

                        // Sequential reveal logic
                        if (sequential) {
                            const progress = currentIteration / maxIterations;
                            const charIndexProgress = revealDirection === 'start' ? index / text.length :
                                revealDirection === 'end' ? (text.length - 1 - index) / text.length :
                                    Math.abs(text.length / 2 - index) / (text.length / 2);

                            if (progress > charIndexProgress) return char;
                        }

                        return getRandomChar();
                    })
                    .join('')
            );
            currentIteration++;
        };

        if ((animateOn === 'view' && isScrolled) || (animateOn === 'hover' && isHovering)) {
            interval = setInterval(animate, speed);
        } else {
            setDisplayText(text); // Reset to original text when not animating
        }

        return () => clearInterval(interval);
    }, [text, speed, maxIterations, sequential, revealDirection, characters, isHovering, isScrolled, animateOn]);

    useEffect(() => {
        if (animateOn === 'view') {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsScrolled(true);
                        observer.disconnect();
                    }
                },
                { threshold: 0.1 }
            );

            // Locate the element somehow? 
            // We need a ref. 
            // For simplicity in this implementation without ref forwarding issues:
            // We'll just rely on the parent or assumption.
            // Actually, let's just trigger it once on mount if 'view' is set, 
            // or effectively 'always' if we don't have a ref bound.
            // Better: let's add a wrapper ref.
            setIsScrolled(true);

            return () => observer.disconnect();
        }
    }, [animateOn]);

    const containerRef = React.useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (animateOn === 'view' && containerRef.current) {
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    setIsScrolled(true);
                }
            }, { threshold: 0.1 });
            observer.observe(containerRef.current);
            return () => observer.disconnect();
        }
    }, [animateOn]);

    return (
        <span
            ref={containerRef}
            className={`inline-block whitespace-pre-wrap ${parentClassName}`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            {...props}
        >
            <span className={className}>
                {displayText.split('').map((char, index) => {
                    const isEncrypted = char !== text[index];
                    return (
                        <span key={index} className={isEncrypted ? encryptedClassName : ''}>
                            {char}
                        </span>
                    );
                })}
            </span>
        </span>
    );
}
