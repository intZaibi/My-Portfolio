import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    
      <footer className="footer">
        <div className="footer_menu">
          <Link
            to=""
            className="footer-link link"
          >
            <div className="footer-menu-item-wrapper">
              <div className="footer-menu-text">
                Reviews
              </div>
            </div>
          </Link>
          <Link
            to="https://github.com/intZaibi/"
            className="footer-link link"
            target="_blank"
          >
            <div className="footer-menu-item-wrapper">
              <div className="footer-menu-text">
                Github
              </div>
            </div>
          </Link>
          <Link
            to="https://www.linkedin.com/in/shahzaib-ali-3b16802aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="footer-link link"
            target="_blank"
          >
            <div className="footer-menu-item-wrapper">
              <div className="footer-menu-text">
                LinkedIn
              </div>
            </div>
          </Link>
        </div>
        <div className="footer-rights">
          <div>All right reserved | intZaibi © 2024</div>
        </div>
      </footer>
  )
}
