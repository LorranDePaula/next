import { useState, useEffect } from 'react';

/**
 * Custom hook to manage state synchronized with localStorage.
 *
 * @param {string} key - The key under which the value is stored in localStorage.
 * @param {any} initialValue - The initial value for the state.
 * @returns {[any, Function]} - Returns the current value and a function to set the value.
 */
function useLocalStorage(key, initialValue) {
  // Initialize state with value from localStorage or fallback to initialValue
  const [value, setValue] = useState(() => {
    // Get the stored value from localStorage
    const storedValue = localStorage.getItem(key);
    // If there's a value in localStorage, parse it, otherwise use the initial value
    return storedValue !== null ? JSON.parse(storedValue) : initialValue;
  });

  // Effect to update localStorage whenever the value changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]); // Dependencies: update localStorage when `key` or `value` changes

  // Function to set the value and trigger a localStorage update
  const setLocalStorageValue = (newValue) => {
    setValue(newValue);
  };

  return [value, setLocalStorageValue];
}

export default useLocalStorage;
