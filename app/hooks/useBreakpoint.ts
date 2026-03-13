"use client";

import { useEffect, useState } from "react";

const BREAKPOINTS = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
} as const;

const useBreakpoint = () => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : BREAKPOINTS.lg,
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isMobile: width < BREAKPOINTS.sm, // < 768
    isTablet: width >= BREAKPOINTS.sm && width < BREAKPOINTS.md, // 768–991
    isDesktop: width >= BREAKPOINTS.md, // >= 992
    isBelow: (bp: keyof typeof BREAKPOINTS) => width < BREAKPOINTS[bp],
    isAbove: (bp: keyof typeof BREAKPOINTS) => width >= BREAKPOINTS[bp],
    width,
  };
};

export default useBreakpoint;
