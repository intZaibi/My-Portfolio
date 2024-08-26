import React from "react";

import { Link } from "react-router-dom";

export default function Project1(props) {
  return (
    <>
      <div className="padding-part">
        <div className="projects-card-heading">
          <div aria-label="project-link" className={`tag-title ${props.anime}`}>
            <div className="icon-embed-xsmall">
              <svg width="80%" height="100%">
                <path
                  d="M18.2217 8.93569C18.3449 9.05883 18.4086 9.23128 18.3989 9.4151C18.3893 9.59893 18.307 9.77907 18.1701 9.91589L9.9158 18.1702C9.77897 18.3071 9.59884 18.3894 9.41501 18.399C9.23119 18.4087 9.05874 18.345 8.9356 18.2218L0.578075 9.8643C0.454933 9.74116 0.391188 9.56871 0.400863 9.38488C0.410538 9.20106 0.49284 9.02092 0.629665 8.8841L8.88401 0.629756C9.02083 0.492931 9.20097 0.410629 9.38479 0.400954C9.56862 0.391279 9.74107 0.455024 9.86421 0.578166L18.2217 8.93569ZM8.4197 9.45158L5.16955 6.20144L2.07417 9.29681L5.32432 12.547L8.4197 9.45158ZM12.5985 13.6303L9.34831 10.3802L6.25293 13.4756L9.50308 16.7257L12.5985 13.6303ZM12.5469 5.32441L9.29672 2.07427L6.20134 5.16964L9.45149 8.41979L12.5469 5.32441ZM16.7256 9.50317L13.4755 6.25303L10.3801 9.3484L13.6303 12.5986L16.7256 9.50317Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="projects-card-title">Featured Projects</div>
          </div>
          <Link className="circle-60-arrow" to="/">
            <div className="icon-embed-custom">
              <svg viewBox="0 0 29 30" fill="none">
                <path
                  d="M22.2087 10.5989C22.3392 9.85936 21.8446 9.15304 21.105 9.02276L11.6379 7.35519C10.8983 7.22491 10.1917 7.71966 10.0612 8.45923C9.93062 9.19881 10.4252 9.90512 11.1648 10.0354L17.4048 11.1315L6.72613 18.6087C6.11005 19.0401 5.96071 19.8862 6.39193 20.502C6.82316 21.1179 7.66929 21.2669 8.28536 20.8356L18.9605 13.3607L17.8633 19.5944C17.7327 20.3339 18.2273 21.0403 18.9669 21.1705C19.7065 21.3008 20.4131 20.8061 20.5436 20.0665L22.2146 10.6L22.2087 10.5989Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </Link>
        </div>
        <div className="project-card-title">
          <div className="tag-flex">
            <div className="tag-item-wrapper">
              <div className="subtitle-projects">MERN Stack</div>
            </div>
            <div className="tag-item-wrapper">
              <div className="subtitle-projects">Tailwind</div>
            </div>
            <div className="tag-item-wrapper">
              <div className="subtitle-projects">Responsive</div>
            </div>
            <div className="tag-item-wrapper">
              <div className="subtitle-projects">GSAP</div>
            </div>
            <div className="tag-item-wrapper">
              <div className="subtitle-projects">Three JS</div>
            </div>
          </div>
        </div>
      </div>
      <div aria-label="project-link" className="project-img-wrap">
        <img
          src="https://cdn.prod.website-files.com/64fa383e971fe0586c36d973/666abf09392b7473a554f13e_Engine%20display.webp"
          alt="Engine"
          className="image-mochkup-project"
        />
      </div>
    </>
  );
}
