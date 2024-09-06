import { useState } from 'react';

/**
 * Custom hook to manage a counter state.
 *
 * @param {number} initialValue - The initial value of the counter.
 * @returns {[number, Function, Function, Function]} - Returns the current count and functions to increment, decrement, and reset the count.
 */
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);
  const reset = () => setCount(initialValue);

  return [count, increment, decrement, reset];
}

export default useCounter;
