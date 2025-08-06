import React, { useState, useEffect, useCallback } from "react";

const wordList = [
  "APPLE",
  "BAKER",
  "CRANE",
  "DREAM",
  "EAGLE",
  "FROST",
  "GRAPE",
  "HOUSE",
  "IGLOO",
  "JUMPY",
  "KITES",
  "LEMON",
  "MAGIC",
  "NIGHT",
  "OCEAN",
  "PLANT",
  "QUEEN",
  "RIVER",
  "SHINE",
  "TABLE",
  "UMBRA",
  "VAPOR",
  "WHALE",
  "XYLEM",
  "YACHT",
  "ZEBRA",
  "ABACUS",
  "BANANA",
  "CASTLE",
  "DAISY",
  "ECLIPSE",
  "FLOWER",
  "GARDEN",
  "HARBOR",
  "ISLAND",
  "JUNGLE",
  "KANGAROO",
  "LAGOON",
  "MOUNTAIN",
  "NATURE",
  "ORANGE",
  "PENGUIN",
  "QUASAR",
  "RAINBOW",
  "SUNSET",
  "TULIPS",
  "UNIVERSE",
  "VOLCANO",
  "WALRUS",
  "XENON",
  "YOGURT",
  "ZODIAC",
  "AMAZING",
  "BEAUTY",
  "CHERRY",
  "DELIGHT",
  "ELEGANT",
  "FANTASY",
  "GLOWING",
  "HARMONY",
  "ILLUSION",
  "JOURNEY",
  "KALEIDO",
  "LAVENDER",
  "MYSTERY",
  "NOSTALGIA",
  "ORCHID",
  "PARADISE",
  "QUICKLY",
  "RADIANT",
  "SERENITY",
  "TREASURE",
  "ULTIMATE",
  "VIBRANT",
  "WONDER",
  "XENIAL",
  "YOUTHFUL",
  "ZEPHYR",
];

const getRandomWord = () => {
  const filteredWords = wordList.filter(
    (word) => word.length >= 5 && word.length <= 7
  );
  return filteredWords[
    Math.floor(Math.random() * filteredWords.length)
  ].toUpperCase();
};

const MAX_GUESSES = 6;

const Wordle = ({ onClose }) => {
  const [targetWord, setTargetWord] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setTargetWord(getRandomWord());
  }, []);

  const handleInputChange = (e) => {
    if (gameOver) return;
    const value = e.target.value.toUpperCase();
    if (value.length <= targetWord.length && /^[A-Z]*$/.test(value)) {
      setCurrentGuess(value);
    }
  };

  const handleSubmitGuess = useCallback(() => {
    if (gameOver || currentGuess.length !== targetWord.length) {
      setMessage(`Please enter a ${targetWord.length}-letter word.`);
      return;
    }

    const newGuesses = [...guesses, currentGuess];
    setGuesses(newGuesses);
    setCurrentGuess("");
    setMessage("");

    if (currentGuess === targetWord) {
      setMessage("You won!");
      setGameOver(true);
    } else if (newGuesses.length >= MAX_GUESSES) {
      setMessage(`You lost! The word was ${targetWord}`);
      setGameOver(true);
    }
  }, [currentGuess, guesses, gameOver, targetWord]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter") {
        handleSubmitGuess();
      }
    },
    [handleSubmitGuess]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const getCellClass = (char, index, guessedWord) => {
    if (!targetWord) return "";
    if (targetWord[index] === char) {
      return "bg-green-500"; // Correct letter and position
    } else if (targetWord.includes(char)) {
      // Check for yellow: letter is in word, but not at this position
      // Also ensure it's not already marked green elsewhere for this letter
      const targetCharCount = targetWord
        .split("")
        .filter((c) => c === char).length;
      let greenCount = 0;
      let yellowCount = 0;
      for (let i = 0; i < guessedWord.length; i++) {
        if (guessedWord[i] === char && targetWord[i] === char) {
          greenCount++;
        }
      }
      for (let i = 0; i < guessedWord.length; i++) {
        if (
          guessedWord[i] === char &&
          targetWord.includes(guessedWord[i]) &&
          targetWord[i] !== guessedWord[i]
        ) {
          yellowCount++;
        }
      }
      if (greenCount + yellowCount < targetCharCount) {
        return "bg-yellow-500";
      }
    }
    return "bg-gray-500"; // Incorrect letter
  };

  const renderGuessRow = (word, isCurrent = false) => {
    const displayWord = isCurrent ? word : word.padEnd(targetWord.length, " ");
    return (
      <div className="flex justify-center space-x-1 mb-1">
        {Array.from({ length: targetWord.length }).map((_, i) => {
          const char = displayWord[i] || " ";
          const cellClass = isCurrent
            ? "bg-gray-300 dark:bg-gray-700"
            : getCellClass(char, i, word);
          return (
            <div
              key={i}
              className={`w-8 h-8 flex items-center justify-center border border-gray-400 text-lg font-bold uppercase ${cellClass}`}
            >
              {char}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 h-full p-4 relative flex flex-col items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 left-4 text-gray-800 dark:text-white"
      >
        &lt; Back
      </button>
      <h1 className="text-2xl text-gray-800 font-bold mb-4 text-center">
        Wordle
      </h1>
      <div className="flex flex-col items-center mb-4">
        {guesses.map((guess, index) => (
          <React.Fragment key={index}>{renderGuessRow(guess)}</React.Fragment>
        ))}
        {guesses.length < MAX_GUESSES &&
          !gameOver &&
          renderGuessRow(currentGuess, true)}
        {Array.from({
          length: MAX_GUESSES - guesses.length - (gameOver ? 0 : 1),
        }).map((_, index) => (
          <div
            key={`empty-${index}`}
            className="flex justify-center space-x-1 mb-1"
          >
            {Array.from({ length: targetWord.length }).map((_, i) => (
              <div
                key={i}
                className="w-8 h-8 flex items-center justify-center border border-gray-400 bg-gray-300 dark:bg-gray-700 text-lg font-bold uppercase"
              ></div>
            ))}
          </div>
        ))}
      </div>
      {!gameOver && (
        <input
          type="text"
          value={currentGuess}
          onChange={handleInputChange}
          maxLength={targetWord.length}
          className="w-48 p-2 text-center border border-gray-400 rounded-md text-gray-800 dark:bg-gray-700 dark:text-white"
          placeholder={`Type a ${targetWord.length}-letter word`}
        />
      )}
      {message && (
        <p className="mt-2 text-lg font-bold text-center text-black">
          {message}
        </p>
      )}
      {gameOver && (
        <button
          onClick={() => {
            setTargetWord(getRandomWord());
            setGuesses([]);
            setCurrentGuess("");
            setGameOver(false);
            setMessage("");
          }}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Play Again
        </button>
      )}
    </div>
  );
};

export default Wordle;
