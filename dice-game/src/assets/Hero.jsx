import { images } from "../data";
import { useState } from "react";

export default function Hero() {
  const [dice, setDice] = useState(images[0].image);
  const [pcDice, setPcDice] = useState(images[0].image);
  const [result, setResult] = useState("");
  const [isRolling, setIsRolling] = useState(false);

  function rollTheDices() {
    setIsRolling(true);
    const interval = setInterval(() => {
      const randomDice1 = Math.floor(Math.random() * images.length);
      const randomDice2 = Math.floor(Math.random() * images.length);
      setDice(images[randomDice1].image);
      setPcDice(images[randomDice2].image);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      const finalDice1 = Math.floor(Math.random() * images.length);
      const finalDice2 = Math.floor(Math.random() * images.length);
      setDice(images[finalDice1].image);
      setPcDice(images[finalDice2].image);

      const playerValue = images[finalDice1].value;
      const pcValue = images[finalDice2].value;

      if (playerValue > pcValue) {
        setResult("You are the winner");
      } else if (playerValue < pcValue) {
        setResult("Compuer is the winner");
      } else {
        setResult("It is a tie");
      }
      setIsRolling(false);
    }, 3000);
  }

  return (
    <div className="container mx-auto  flex flex-col items-center justify-evenly gap-8 mt-8 px-4 sm:px-6 lg:px-8">
      <div className="dice-container flex flex-col sm:flex-row items-center gap-8">
        <div className="dice-item flex flex-col items-center">
          <input
            name="myInput"
            placeholder="Enter your name"
            className="text-lg sm:text-xl text-center"
          />
          <img src={dice} alt="Player Dice" className="lg:w-72 sm:w-48" />
        </div>
        <div className="dice-item flex flex-col items-center">
          <p className="text-lg sm:text-xl">Computer</p>
          <img src={pcDice} alt="Computer Dice" className="lg:w-72 sm:w-48" />
        </div>
      </div>

      <button
        onClick={rollTheDices}
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-lg px-12 py-3 sm:px-24 sm:py-4 mb-4 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        {isRolling ? "Rolling..." : "Roll the dice"}
      </button>

      <div className="text-2xl tracking-wider">
        <h3>{result}</h3>
      </div>
    </div>
  );
}
