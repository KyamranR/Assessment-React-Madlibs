const MadlibStory = ({ storyData = {}, restart }) => {
  const { noun, noun2, adjective, color } = storyData;

  return (
    <div>
      <p>
        Once upon a time, there was a {color} {noun} who loved a {adjective}{" "}
        {noun2}.
      </p>
      <button onClick={restart}>Restart</button>
    </div>
  );
};

export default MadlibStory;
