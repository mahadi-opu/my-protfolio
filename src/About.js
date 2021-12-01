import React from "react";
import "./About.css";
import aboutImg from "./img/sm hasan opu.jpg";
function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2 about__p_top">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                Hello! My name is Syed Mahadi Hasan Opu. a junior Softwar Engineer specializing in building React.js WebApp. I enjoy creating things that live on the internet. My interest in web development started back in 2021, I use Javascript and React.js to create high-end interactive experiences and products.Certified by Programming Hero and Sololearn
              </p>
              <p className="about__text p__color">
                  Skilled in Html5,Css3,Bootstrap,Tailwind,Material UI, JavaScript, ES6, React JS, React Router, Firebase. Express, Mongodb, Node js, Heroku I have some experience efficiently coding websites and applications using modern HTML, CSS, JavaScript, and react.
              </p>
              <p className="about__text p__color">
                Also using other modern technologies easy-to-use, user-friendly websites and applications are a passion of mine and I am assured I might be a wonderful addition to your organization. additionally, to my content, I actively search out new technologies and keep up-to-date on business trends and advancements. I’ve attached a copy of my resume detailing my experience, at the side of links to websites and applications I’ve had the honor of acting on.
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="https://drive.google.com/file/d/1LER7gs03Cl-3v13BeQiGC5dTVbd31vSa/view?usp=sharing">
                  <button className="about btn pointer">Download Cv</button>
                </a>
                <a href="#">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
