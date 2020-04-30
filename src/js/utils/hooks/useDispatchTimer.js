import React, { useEffect } from 'react';

/**
 * Hook to determine if a scroll bar should be shown or not. Also has the open to move the focus to the bottom of the Ref.
 * @returns {undefined}
 */
export default function (dispatchFunction, frequency = 1000) {

  if (typeof dispatchFunction !== 'function') {
    throw new RangeError('useDispatchTimer recieved funciton argument that is not a function.');
  }

  if (isNaN(frequency)) {
    throw new RangeError('useDispatchTimer recieved frequency argument that is not a number.')
  }

  useEffect(() => {
    const timeOut = setTimeout(() => dispatchFunction(), frequency)
    return () => {
      clearTimeout(timeOut)
    }
  })

}