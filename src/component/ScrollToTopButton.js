import React, { useState, useEffect, useCallback } from 'react'

import './../css/ScrollToTopButton.css'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = useCallback(() => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [])

  // Détermine si le bouton doit être visible en fonction de la position de la page
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [toggleVisibility])

  // Scroll jusqu'en haut de la page lorsque le bouton est cliqué
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  return (
    <div className={`scroll-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
      <i className="arrow up"></i>
    </div>
  )
}

export default ScrollToTopButton
