```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect will run after every render
    console.log('Count:', count); 
    return () => {
      // Cleanup function (optional)
      console.log('Cleanup');
    };
  }, [count]); // Only re-run the effect if 'count' changes

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default MyComponent;
```