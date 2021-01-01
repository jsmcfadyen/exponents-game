import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import SquaresGame from "../components/SG.js";
import CubesGame from "../components/CG.js";
import PowTwoGame from "../components/PT.js";
import MainMenu from "../components/MainMenu.js";
import GameSelector from "../components/GameSelector";

export default function Home() {
  //Multiple games, 0 is not playing, 1 is squares, 2 is cubes, 3 is 2-powers
  const [playing, setPlaying] = useState(false);
  const [highscore, setHighscore] = useState(0);
  const [selected, setSelected] = useState(0);

  const startGame = () => {
    //list // use selected as index
    setPlaying(true);
    setSelected(selected);
  };

  const gameOverScreen = () => {
    setPlaying(false);
    setSelected(0);
  };

  const GameSwitcher = () => {
    switch (selected) {
      case 0:
        return <MainMenu />;
      case 1:
        return (
          <SquaresGame
            onGameOver={gameOverScreen}
            setHighscore={setHighscore}
          />
        );
      case 2:
        return (
          <CubesGame onGameOver={gameOverScreen} setHighscore={setHighscore} />
        );
      case 3:
        return (
          <PowTwoGame onGameOver={gameOverScreen} setHighscore={setHighscore} />
        );
    }
  };

  return (
    <div>
      <GameSelector startUp={startGame} setSelected={setSelected} />
      <div className="border-solid border-black">{GameSwitcher()}</div>
    </div>
  );
}
