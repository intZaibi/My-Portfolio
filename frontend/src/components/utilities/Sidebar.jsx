import React from "react";
import profile_pic from '../../images/profile-pic.jpg'
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faBoxArchive } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Sidebar(props) {
  return (
    <div className="sidebar-container">
      <div className="sidebar-wrapper">
        <div className="profile-box-wrapper">
          <div className="profile-pic">
            <img src= {profile_pic} alt="profile-pic" />
          </div>
          <div className="profile-name">
            <h4>Shahzaib Ali</h4>
            <p>Web developer</p>
          </div>
        </div>
        <div className={`sidebar-menu-wrapper ${props.anime}`}>
          <div className="menu-item home">
          <FontAwesomeIcon className="mug" icon = {faMugHot} />
            <Link className="Link" to='/'>Home</Link>
          </div>
          <div className="menu-item projects">
          <FontAwesomeIcon className="icon" icon={faDatabase} />
            <Link className="Link" to='/AllProjects'>Projects</Link>
          </div>
          <div className="menu-item about">
          <FontAwesomeIcon className="icon" icon = {faAt} />
            <Link className="Link" to='/Aboutpage'>About</Link>
          </div>
          <div className="menu-item contact">
          <FontAwesomeIcon className="icon" icon = {faBoxArchive} />
            <Link className="Link" to='/Contactpage'>Contact</Link>
          </div>
          <div className="menu-item cv disable">
              <FontAwesomeIcon className="icon" icon={faFile} />
              <Link className="Link" to="/Contactpage">
                Download my CV
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
