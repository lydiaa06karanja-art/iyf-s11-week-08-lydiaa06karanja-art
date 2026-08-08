
function Button({ text = "Click me", variant = "primary", onClick }) {
  return (
    <button 
      className={`btn btn-${variant}`} 
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
