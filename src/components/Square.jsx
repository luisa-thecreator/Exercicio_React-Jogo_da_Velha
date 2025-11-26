function Square({ value, onSquareClick }) {
  const squareClass = value === 'X' ? 'square square-x' : value === 'O' ? 'square square-o' : 'square';
  
  return (
    <button className={squareClass} onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;

