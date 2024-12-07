import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillInstagram, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import { FaGitSquare } from "react-icons/fa";
import { Context } from "../../main";

const Footer = () => {
  const isDashboard = useLocation("http://localhost:5173/dashboard");
  const { mode, setMode } = useContext(Context);

  return (
    <footer
      className={
        isDashboard.pathname === "/dashboard"
          ? "hideFooter"
          : mode === "light"
          ? "light-footer"
          : "dark-footer"
      }
    >
      <div className="container">
        <div className="about">
          <h3>About</h3>
          <p>
          We are a student Community platform where seniors share experiences, guidance, and resources to help juniors succeed. Join our community of learners today!
          </p>
          <p>
            <span>Email:</span>Mim123@gmail.com
          </p>
          <p>
            <span>Phone:</span>0123987123
          </p>
        </div>
        <div className="quick_links">
          <h3>Quick Links</h3>
          <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"/blogs"}>Blogs</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/dashboard"}>Dashboard</Link>
          </ul>
        </div>
        <div className="categories">
          <h3>Categories</h3>
          <ul>
            <li>Study_Tips</li>
            <li>Technology</li>
            <li>Sports</li>
            <li>Travel</li>
            <li>Versity_Life</li>
            <li>Career_Guidance</li>
          </ul>
        </div>
        <div className="news_letter">
          <div>
            <h3>Weekly Newletter</h3>
            <p>Get blog articles and offer via email</p>
          </div>
          <div>
            <input type="text" placeholder={`Your Email`} />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="logo">Student <span>Community</span></div>
        <div className="links">
          <Link to={"/"} target="_blank">
            <AiFillInstagram />
          </Link>
          <Link to={"/"} target="_blank">
            <FaGitSquare />
          </Link>
          <Link to={"https://www.youtube.com/@CodeWithZeeshu"} target="_blank">
            <AiFillYoutube />
          </Link>
          <Link to={"/"} target="_blank">
            <AiFillLinkedin />
          </Link>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
