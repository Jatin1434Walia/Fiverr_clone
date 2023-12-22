/* eslint-disable */
import React from "react";
import "./Slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    arrows: true,
    autoplay: true,
    swipeToSlide: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="SliderImg">
      <Slider {...settings}>
        <Link to="/gigs?cat=design">
          <div className="catCard">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/f27bec553efc12cc60baed89b8f2223e-1674661140708/ai-artists-2x.png"
              alt=""
            />
            <span className="desc">Add talent to AI</span>
            <span className="title">AI Artists</span>
          </div>
        </Link>
        <Link to="/gigs?cat=design">
          <div className="catCard">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png"
              alt=""
            />
            <span className="desc">Build yor brand</span>
            <span className="title">Logo Design</span>
          </div>
        </Link>
        <Link to="/gigs?cat=design">
          <div className="catCard">
            <img
              src="https://images.pexels.com/photos/4371669/pexels-photo-4371669.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt=""
            />
            <span className="desc">Customize your site</span>
            <span className="title">WordPress</span>
          </div>
        </Link>
        <Link to="/gigs?cat=design">
          <div className="catCard">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png"
              alt=""
            />
            <span className="desc">Share your message</span>
            <span className="title">Voice Over</span>
          </div>
        </Link>
        <Link to="/gigs?cat=design">
          <div className="catCard">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png"
              alt=""
            />
            <span className="desc">Engage your audience</span>
            <span className="title">Video Explainer</span>
          </div>
        </Link>
        <Link to="/gigs?cat=design">
          <div className="catCard">
            <img
              src="https://images.pexels.com/photos/11378899/pexels-photo-11378899.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt=""
            />
            <span className="desc">Reach more customers</span>
            <span className="title">Social Media</span>
          </div>
        </Link>
        <Link to="/gigs?cat=design">
          <div className="catCard">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png"
              alt=""
            />
            <span className="desc">Unlock growth online</span>
            <span className="title">SEO</span>
          </div>
        </Link>
        <Link to="/gigs?cat=design">
          <div className="catCard">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png"
              alt=""
            />
            <span className="desc">Color you dreams</span>
            <span className="title">Illustration</span>
          </div>
        </Link>
        <Link to="/gigs?cat=design">
          <div className="catCard">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png"
              alt=""
            />
            <span className="desc">Go global</span>
            <span className="title">Translation</span>
          </div>
        </Link>
        <Link to="/gigs?cat=design">
          <div className="catCard">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png"
              alt=""
            />
            <span className="desc">Learn your business</span>
            <span className="title">Data Entry</span>
          </div>
        </Link>
      </Slider>
    </div>
  );
}
