import * as React from "react";


function About(props) {
  return (
      <div id="main">
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      <p>test = {props.test}</p>
      </div>
  );
}

export default About;