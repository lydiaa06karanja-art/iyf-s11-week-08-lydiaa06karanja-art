function EventExamples() {
  // Inline handler (simple cases)
  const handleClick = () => {
    console.log('Button clicked!');
  };

  // Handler with event object
  const handleInput = (event) => {
    console.log('Input value:', event.target.value);
  };

  // Handler with custom parameter
  const handleItemClick = (itemId) => {
    console.log('Item clicked:', itemId);
  };

  return (
    <div>
      {/* Basic click */}
      <button onClick={handleClick}>Click Me</button>

      {/* With event */}
      <input onChange={handleInput} placeholder="Type something" />

      {/* With parameter - use arrow function */}
      <button onClick={() => handleItemClick(123)}>
        Item 123
      </button>

      {/* Prevent default */}
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log('Form submitted');
      }}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default EventExamples;
