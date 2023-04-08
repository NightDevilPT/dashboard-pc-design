import "./Footer.scss";

import React from 'react'

function Footer() {
  return (
    <footer>
      <div className={`inner-width`}>
        <div className={`footer-copyright`}>
            <span>&copy;</span> 2023 Recruitr
        </div>

        <div className={`footer-menu`}>
            <button>Help Center</button>
            <button>Privacy Policy</button>
        </div>
      </div>
    </footer>
  )
}

export default Footer