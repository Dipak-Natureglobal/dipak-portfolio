import { useState, useEffect } from "react";

const roles = ["Software Developer","Frontend Developer","Fullstack Developer", "UI/UX Developer"];

const RoleSwitcher = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(roles[0]);
  const [isErasing, setIsErasing] = useState(false);
  
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const totalChars = currentRole.length;

    let timeoutId;

    if (!isErasing) {
      // Typing effect
      if (displayedText.length < totalChars) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, 150); // Speed of typing
      } else {
        // Start erasing after a delay
        timeoutId = setTimeout(() => {
          setIsErasing(true);
        }, 2000); // Delay before starting to erase
      }
    } else {
      // Erasing effect
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        }, 100); // Speed of erasing
      } else {
        // Move to the next role after erasing
        setIsErasing(false);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, isErasing, currentRoleIndex]);

  return (
    <span className="xl:text-xl text-[16px] dark:text-[#ADFF2F] text-[#22c55e] font-bold">
      {displayedText}
    </span>
  );
};

export default RoleSwitcher;
