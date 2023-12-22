import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import video1 from "../../images/slidevdo1.mp4";
import video2 from "../../images/slidevdo2.mp4";
import video3 from "../../images/slidevdo3.mp4";

const FullSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    autoplay: true,
    swipeToSlide: true,
    autoplaySpeed: 5000,
  };
  return (
    <div className="fullSlider">
      <Slider {...settings}>
        <div className="w-full">
          <div className="w-2/5">
            <video src={video1} controls />
          </div>
          <div className="w-3/5">
            <p className="flex items-center">
              Tim and Dan Joo, Co-Founders |{" "}
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/haerfest-logo-x2.934ab63.png"
                alt="logo"
              />
            </p>
            <p>
              " When you want to create a business bigger than yourself, you
              nedd a lot of help. That's what Fiverr does. "
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="w-2/5">
            <video src={video2} controls />
          </div>
          <div className="w-3/5">
            <p className="flex items-center">
              Kay Kim, Co-Founders |{" "}
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/rooted-logo-x2.7da3bc9.png"
                alt="logo"
              />
            </p>
            <p>
              " It is extremely exciting that Fiver has freelancers from all
              over the world - it broadens the talent pool. One of the best
              thing about Fiverr is that while we're sleeping, someone's
              working. "
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="w-2/5">
            <video src={video3} controls />
          </div>
          <div className="w-3/5">
            <p className="flex items-center">
              Brighid Gannon(DNP, PMHNP-BC), Co-Founders |{" "}
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/lavender-logo-x2.3fff9e7.png"
                alt="logo"
              />
            </p>
            <p>
              "We used Fiverr for SEO, our logo, website, copy, animated videos
              - literally everything. It was like working with a human right
              next to you versus being across the world."
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default FullSlider;
