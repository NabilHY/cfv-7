import { useState, useEffect } from "react";

const Game = ({ data }) => {
  const [currentObjectIndex, setCurrentObjectIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [hasMadeSelection, setHasMadeSelection] = useState(false);

  useEffect(() => {
    if (hasMadeSelection) {
      const timeoutId = setTimeout(() => {
        // Advance to the next object after 10 seconds
        setCurrentObjectIndex((prevIndex) => prevIndex + 1);
        setSelectedOptionIndex(null); // Reset selected option
        setHasMadeSelection(false); // Reset selection flag
      }, 10000);

      return () => clearTimeout(timeoutId);
    }
  }, [hasMadeSelection, currentObjectIndex]);

  const handleOptionSelect = (optionIndex) => {
    console.log(`Selected option: ${data[currentObjectIndex].options[optionIndex].text}`);
    setSelectedOptionIndex(optionIndex);
    setHasMadeSelection(true);
  };

  const currentObject = data[currentObjectIndex];

  useEffect(() => {
    if (currentObject.backgroundImage) {
      document.body.style.backgroundImage = `url(${currentObject.backgroundImage})`;
    }
    return () => {
      document.body.style.backgroundImage = null;
    };
  }, [currentObject.backgroundImage]);

  return (
    <div>
      {/* Interface 1 */}
      {selectedOptionIndex === null && (
        <>
          <h2>{currentObject.title}</h2>
          <p>{currentObject.objective}</p>
        </>
      )}

      {/* Interface 2 */}
      {selectedOptionIndex === null && !hasMadeSelection && (
        <>
          <p>{currentObject.scenario}</p>
          {currentObject.options.map((option, index) => (
            <button key={index} onClick={() => handleOptionSelect(index)}>
              {option.text}
            </button>
          ))}
        </>
      )}

      {/* Interface 3 */}
      {selectedOptionIndex !== null && (
        <>
          <p>{currentObject.results}</p>
        </>
      )}
    </div>
  );
};

export default Game;  