"use client";

import { useState, useEffect } from "react";

interface TypeAnimationProps {
  sequence: (string | number)[];
  repeat?: boolean;
  className?: string;
}

export function TypeAnimation({
  sequence,
  repeat = true,
  className,
}: TypeAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const currentItem = sequence[currentIndex];

    if (typeof currentItem === "string") {
      if (!isDeleting) {
        // Typing phase
        if (displayedText.length < currentItem.length) {
          timeout = setTimeout(() => {
            setDisplayedText(currentItem.slice(0, displayedText.length + 1));
          }, 40 + Math.random() * 60); // Random typing speed for natural effect
        } else {
          // Wait before deleting
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, sequence[currentIndex + 1] as number || 1000);
        }
      } else {
        // Deleting phase
        if (displayedText.length > 0) {
          timeout = setTimeout(() => {
            setDisplayedText(displayedText.slice(0, displayedText.length - 1));
          }, 20 + Math.random() * 20); // Random deleting speed
        } else {
          setIsDeleting(false);
          const nextIndex = (currentIndex + 2) % sequence.length;
          // Only proceed to next item if we want to repeat or haven't reached the end
          if (repeat || nextIndex > currentIndex) {
            setCurrentIndex(nextIndex);
          }
        }
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, displayedText, isDeleting, repeat, sequence]);

  return <span className={className}>{displayedText || "\u00A0"}</span>;
}