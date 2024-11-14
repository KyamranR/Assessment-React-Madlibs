import { useState } from "react";
import MadlibForm from "./MadlibForm";
import MadlibStory from "./MadlibStory";

const MadLib = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [storyData, setStoryData] = useState({
    noun: "",
    noun2: "",
    adjective: "",
    color: "",
  });

  const handleSubmit = (formData) => {
    setStoryData(formData);
    setIsSubmitted(true);
  };

  const restartGame = () => {
    setIsSubmitted(false);
    setStoryData({
      noun: "",
      noun2: "",
      adjective: "",
      color: "",
    });
  };

  return (
    <div>
      <h1>Madlibs</h1>
      {isSubmitted ? (
        <MadlibStory storyData={storyData} restart={restartGame} />
      ) : (
        <MadlibForm onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default MadLib;
