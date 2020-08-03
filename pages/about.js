import React from "react";
// function component - arrow function
//When TO USE:
// 1. for smaller components
// 2. reuseable components
// 3. presentional component, patialy right, we can use hooks and specify state
const About = () => {
  return <h1>Hello About Page</h1>;
};

// const About = () => {
//   const message = "Hello World";
//   return React.createElement(
//     "div",
//     null,
//     "I am genreting this with createElement"
//   );
// };

export default About;
