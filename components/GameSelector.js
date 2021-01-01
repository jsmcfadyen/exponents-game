import GameButton from "../components/GameButton";

const GameSelector = ({ startUp, setSelected }) => {
  return (
    <div className=" bg-blue-300 p-5 ">
      <h1 className="flex justify-center text-4xl font-bold m-5">
        Powers Game
      </h1>
      <div className="grid grid-cols-3">
        <GameButton startGame={startUp} setSelected={setSelected} game={1}>
          Square Roots Game
        </GameButton>
        <GameButton startGame={startUp} setSelected={setSelected} game={2}>
          Cube Roots Game
        </GameButton>
        <GameButton startGame={startUp} setSelected={setSelected} game={3}>
          Powers of Two Game
        </GameButton>
      </div>
    </div>
  );
};
export default GameSelector;
