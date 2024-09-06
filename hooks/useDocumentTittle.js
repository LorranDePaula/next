import { useEffect } from 'react';

/**
 * Custom hook to update the document title.
 *
 * @param {string} title - The title to set for the document.
 */
function useDocumentTitle(title) {
  useEffect(() => {
    // Update the document title
    document.title = title;
  }, [title]); // Effect runs whenever the title changes
}

export default useDocumentTitle;
