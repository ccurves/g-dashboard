import React, { useEffect, useState } from "react";
import Header from "./Header";

const Navbar = () => {
  const section = localStorage.getItem("currentSection");
  const previous = localStorage.getItem("previousSection");
  const [stateSection, setStateSection] = useState(section);

  const setSection = (value, value2) => {
    localStorage.setItem("currentSection", value);
    localStorage.setItem("previousSection", value2);
    setStateSection(value);
  };
  useEffect((section) => {
    if (section === null || section === "") {
      localStorage.setItem("currentSection", "Quickview");
    }
  }, []);
  return (
    <div className="d-flex flex-column flex-root">
      <div className="">
        <div
          className="wrapper d-flex flex-column flex-row-fluid"
          id="kt_wrapper"
        >
          <Header
            setSection={setSection}
            section={stateSection}
            previous={previous}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
