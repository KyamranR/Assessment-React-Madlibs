import MadlibForm from "./MadlibForm";
import MadlibStory from "./MadlibStory";
import useMadlib from "./useMadlib";

const MadLib = () => {
  const { isSubmitted, storyData, submitStory, restartGame } = useMadlib({
    noun: "",
    noun2: "",
    adjective: "",
    color: "",
  });

  return (
    <div>
      <h1>Madlibs</h1>
      {isSubmitted ? (
        <MadlibStory storyData={storyData} restart={restartGame} />
      ) : (
        <MadlibForm onSubmit={submitStory} />
      )}
    </div>
  );
};

export default MadLib;
