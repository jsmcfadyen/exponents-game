const MainMenu = ({ highscore }) => {
  return (
    <div className="flex flex-col text-center items-center">
      <div className="text-7xl font-bold mb-4">Pick a game!</div>
      <div>
        <p className="text-m font-bold py-5">Highscores</p>
        <h2>Squares Game: </h2>
        <h2>Cubes Game: </h2>
        <h3>Powers of Two Game:</h3>
      </div>
    </div>
  );
};

export default MainMenu;
