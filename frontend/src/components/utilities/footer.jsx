import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    
      <footer className="footer">
        <div className="footer_menu">
          <Link
            to="/AllProjects"
            className="footer-link link"
          >
            <div className="footer-menu-item-wrapper">
              <div className="footer-menu-text">
                Projects
              </div>
            </div>
          </Link>
          <Link
            to="/resources"
            className="footer-link link"
          >
            <div className="footer-menu-item-wrapper">
              <div className="footer-menu-text">
                Resources
              </div>
            </div>
          </Link>
          <Link
            to="/Contactpage"
            className="footer-link link"
          >
            <div className="footer-menu-item-wrapper">
              <div className="footer-menu-text">
                Contact
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
