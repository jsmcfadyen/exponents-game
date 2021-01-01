const GameButton = ({ children, startGame, setSelected, game }) => {
  const on_click_function = () => {
    startGame();
    setSelected(game);
  };

  return (
    <button
      onClick={on_click_function}
      className="border-white border-b-2 uppercase font-medium text-3xl p-2"
    >
      {children}
    </button>
  );
};
export default GameButton;
