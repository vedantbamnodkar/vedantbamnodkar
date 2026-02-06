import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, triggerOnce = true, rootMargin = "0px" } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, triggerOnce, rootMargin]);

  return { ref, isVisible };
};

// Wrapper component for animated sections
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale" | "blur";
}

export const AnimatedSection = ({ 
  children, 
  className = "", 
  delay = 0,
  animation = "fade-up"
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation();

  const baseStyles = "transition-all duration-700 ease-out";
  
  const animationStyles = {
    "fade-up": {
      hidden: "opacity-0 translate-y-8",
      visible: "opacity-100 translate-y-0"
    },
    "fade-left": {
      hidden: "opacity-0 -translate-x-8",
      visible: "opacity-100 translate-x-0"
    },
    "fade-right": {
      hidden: "opacity-0 translate-x-8",
      visible: "opacity-100 translate-x-0"
    },
    "scale": {
      hidden: "opacity-0 scale-95",
      visible: "opacity-100 scale-100"
    },
    "blur": {
      hidden: "opacity-0 blur-sm",
      visible: "opacity-100 blur-0"
    }
  };

  const currentAnimation = animationStyles[animation];

  return (
    <div
      ref={ref}
      className={`${baseStyles} ${isVisible ? currentAnimation.visible : currentAnimation.hidden} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Stagger children animations
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const StaggerContainer = ({ 
  children, 
  className = "",
  staggerDelay = 100 
}: StaggerContainerProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children) 
        ? children.map((child, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ease-out ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * staggerDelay}ms` }}
            >
              {child}
            </div>
          ))
        : children
      }
    </div>
  );
};
