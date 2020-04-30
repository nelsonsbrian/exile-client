import React, { useRef, useState, useEffect } from 'react'

/**
 * Hook to determine if a scroll bar should be shown or not. Also has the open to move the focus to the bottom of the Ref.
 * @param {String} dependent dependents for useEffect to reRender
 * @returns {[boolean, function, reference]} 
 */
export default function (dependent = false) {
  const scrollRef = useRef(null);
  const [showSlider, setShowSlider] = useState(true)

  if (dependent) {
    useEffect(() => {
      if (scrollRef && scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    }, [dependent])
  }

  const handleScroll = () => {
    const { scrollTop, scrollHeight, offsetHeight } = scrollRef && scrollRef.current || {};
    (scrollHeight - scrollTop < offsetHeight + 10) ? setShowSlider(false) : setShowSlider(true);
  }

  return [showSlider, handleScroll, scrollRef];
}