import React from "react";

import "./about.scss";
import Feature from "../../containers/features/fetures";

const About = () => {
  return (
    <div className="project-2__whatgpt3 section__margin" id="wgpt3">
    <div className="project-2__whatgpt3-feature">
      <Feature title="About Us" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
    </div>
    <div className="project-2__whatgpt3-heading">
      <h1 className="gradient__text">Bura sloqan yazmaq lazımdır</h1>
      <p>Explore the Library</p>
    </div>
    <div className="project-2__whatgpt3-container">
      <Feature title="Our programs" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
    </div>
  </div>
  )
};

export default About;