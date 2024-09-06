import { useState } from 'react';

/**
 * 
 *
 * @param {boolean} initialState 
 * @returns {[boolean, Function]} 
 */
function useToggle(initialState = false) {
  const [value, setValue] = useState(initialState);


  const toggle = () => setValue(prevValue => !prevValue);

  return [value, toggle];
}

export default useToggle;

