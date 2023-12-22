/* eslint-disable */
import React from "react";
import "./Home.css";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import SimpleSlider from "../../components/slider/SliderImg";
import checkImg from "../../images/check.png";
import videoPlay from "../../images/video.mp4";
import FullSlider from "../../components/slider/FullSlider";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />

      {/* Slider */}

      <div className="slider">
        <h1>Popular Services</h1>
        <SimpleSlider />
      </div>

      {/* normal features
       */}
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips.</h1>
            <div className="title">
              <img src={checkImg} alt="checkImg" />
              Stick to your budget
            </div>
            <p>
              Find the right service for every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src={checkImg} alt="checkImg" />
              Get quality work done quickly
            </div>
            <p>
              Hand your project over to a talented freelancer in minutes, get
              long-lasting results.
            </p>

            <div className="title">
              <img src={checkImg} alt="checkImg" />
              Pay when you're happy
            </div>
            <p>
              Upfront quotes mean no surprises. Payments only get released when
              you approve.
            </p>
            <div className="title">
              <img src={checkImg} alt="checkImg" />
              Count on 24/7 support
            </div>
            <p>
              Our round-the-clock support team is available to help anytime,
              anywhere.
            </p>
          </div>
          <div className="item">
            <video src={videoPlay} controls></video>
          </div>
        </div>
      </div>

      {/* Explore Features */}

      <div className="explore">
        <div className="exploreContainer">
          <h1>You need it, we've got it</h1>
          <div className="items">
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Graphics & Design</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                alt=""
              />
              <div className="line"></div>

              <span>Digital Marketing</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Writing & Translation</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Video & Animation</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Music & Audio</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Programming & Tech</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Business</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Lifestyle</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Data</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Photography</span>
            </div>
          </div>
        </div>
      </div>

      {/* dark features  */}

      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              Fiverr <i>business</i> <span>new</span>
            </h1>
            <h1>
              A business solution designed for <i>teams</i>
            </h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src={checkImg} alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className="title">
              <img src={checkImg} alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title">
              <img src={checkImg} alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Liverr Business</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* <FullSlider /> */}
    </div>
  );
};

export default Home;
