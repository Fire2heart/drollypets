import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './myslider.css'

import {IoIosArrowForward} from 'react-icons/io'
import {IoIosArrowBack} from 'react-icons/io'

function MySlider() {
  const slideImages = [
    {
      id: 0,
      imgURL: 'https://www.petsarefamilytoo.net/img/carousel/slide-0.jpg'
    },
    {
      id: 1,
      imgURL: 'https://www.cdc.gov/healthypets/images/covid/dog-and-cat.jpg?_=46111'
    },
    {
      id: 2,
      imgURL: 'https://av.sc.com/sg/content/images/sg-pet-owner-article-masthead-1800x564.jpg'
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <IoIosArrowBack/>,
    nextArrow: <IoIosArrowForward/>,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
     <div className='mySlider'>
        <Slider {...settings}>
          {slideImages.map(item => (<div key={item.id} className='mySlider__item'><img src={item.imgURL} alt="#" /></div>))}
        </Slider>
      </div>
    );
}

export default MySlider