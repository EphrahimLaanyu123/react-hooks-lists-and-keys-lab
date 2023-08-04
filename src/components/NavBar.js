// import React from "react";

// function NavBar() {
//   const links = ["home", "about", "projects"];

//   let href = links.map((url)=>{
//     return <a key={url} href={`#${url}`}>{url}</a>
//   })

//   return <nav>{href}</nav>;
// }

// export default NavBar;
import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {links.map((link, index) => (
        <a key={index} href={`#${link}`}>
          {link}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;