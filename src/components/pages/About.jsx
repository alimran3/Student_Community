import React, { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h2>About</h2>
        <p>
        Welcome to our student blogging platform, a space created by passionate learners for the university community! Our mission is to bridge the gap between senior and junior students by providing a platform where experienced seniors can share their knowledge, experiences, and guidance.

Our team of four — Ashfia, Mim, Imran, and Priya Gupta — has collaborated to develop this website with the vision of making information accessible, reducing confusion, and fostering a supportive learning environment.

We believe that every student’s journey can be smoother with the right advice and resources, and we are excited to contribute to this through our platform.

Feel free to explore, learn, and connect with seniors who have been in your shoes!Welcome to our student blogging platform, a space created by passionate learners for the university community! Our mission is to bridge the gap between senior and junior students by providing a platform where experienced seniors can share their knowledge, experiences, and guidance.

Our team of four — Ashfia, Mim, Imran, and Priya Gupta — has collaborated to develop this website with the vision of making information accessible, reducing confusion, and fostering a supportive learning environment.

We believe that every student’s journey can be smoother with the right advice and resources, and we are excited to contribute to this through our platform.

Feel free to explore, learn, and connect with seniors who have been in your shoes!
        </p>
        <h2>Our Mission</h2>
    <p>
      Navigating university life can be challenging, especially for junior students who often struggle to find reliable information and proper guidance. Our mission is to eliminate these challenges by providing:
    </p>
    <ul>
      <li><strong>A Reliable Knowledge Hub:</strong> Seniors can share their personal experiences, academic advice, and career insights through blogs.</li>
      <li><strong>Study Resources:</strong> Upload and access valuable study materials such as PDFs, lecture notes, and tutorial videos.</li>
      <li><strong>Interactive Learning:</strong> Engage with blog posts through comments and discussions.</li>
      <li><strong>Mentorship Opportunities:</strong> Juniors can directly connect with seniors for mentorship and guidance.</li>
    </ul>
      </div>

      
    </article>
  );
};

export default About;
