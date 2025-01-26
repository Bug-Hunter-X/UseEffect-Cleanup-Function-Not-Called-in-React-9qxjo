```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [shouldCleanup, setShouldCleanup] = useState(true);

  useEffect(() => {
    console.log('Count:', count);
    return () => {
      if (shouldCleanup) {
        console.log('Cleanup');
      }
    };
  }, [count, shouldCleanup]);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleCleanupToggle = () => {
    setShouldCleanup(!shouldCleanup);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleCleanupToggle}>Toggle Cleanup</button>
    </div>
  );
}

export default MyComponent;
```