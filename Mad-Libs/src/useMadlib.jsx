import { useState } from "react";

function useMadlib(initialStoryData) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [storyData, setStoryData] = useState(initialStoryData);

  const submitStory = (data) => {
    setStoryData(data);
    setIsSubmitted(true);
  };

  const restartGame = () => {
    setIsSubmitted(false);
    setStoryData(initialStoryData);
  };

  return {
    isSubmitted,
    storyData,
    submitStory,
    restartGame,
  };
}

export default useMadlib;
