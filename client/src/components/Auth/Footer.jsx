import React from "react";
import doc from "../../media/doc/T&C.pdf";

const Footer = () => {
  return (
    <div className="d-flex justify-content-lg-start justify-content-center align-items-center py-2 py-lg-7 py-lg-0 fs-5 fw-bolder">
      <a
        href="https://ggconcept.org/about"
        className="text-gray-600 text-hover-primary"
      >
        About
      </a>
      <a
        href="https://ggconcept.org/contact"
        className="text-gray-600 text-hover-primary ms-10"
      >
        Support
      </a>

      <a
        href={doc}
        target="_blank"
        rel="noreferrer"
        className="text-gray-600 text-hover-primary ms-10"
      >
        T&Cs
      </a>
    </div>
  );
};

export default Footer;
