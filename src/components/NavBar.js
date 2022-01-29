import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkRender = links.map((link, index) => {
    return (<a href={"#"+link} key={index}>{link}</a>)
  })

  return <nav>
    {/* display an <a> tag for each link here */}
    {linkRender}
    </nav>;
}

export default NavBar;
