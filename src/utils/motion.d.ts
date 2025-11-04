import { Variants, Transition } from 'framer-motion';

export declare const textVariant: (delay?: number) => Variants;

export declare const fadeIn: (direction: string, type: string, delay: number, duration: number) => Variants;

export declare const slideIn: (direction: string, type: string, delay: number, duration: number) => Variants;

export declare const zoomIn: (delay: number, duration: number) => Variants;

export declare const staggerContainer: (staggerChildren: number, delayChildren?: number) => Variants;