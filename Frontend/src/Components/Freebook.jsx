import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import list from '../../public/list.json'
import Cards from './Cards';

function Freebook() {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    const filterData = list.filter((data)=>data.categroy==="Off");
    console.log(filterData)
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
           <div>
                <h1 className='font-semibold text-xl pb-2'>Fashion on Off</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque provident ad corrupti porro. Labore, exercitationem! Dolor libero eaque perspiciatis ipsa ab aliquid quisquam eos nihil, amet soluta nulla nemo voluptates!</p>
           </div>
       


        <div className='my-12 md:ml-[150px] '>
            <Slider {...settings}>
                {filterData.map((item)=>(
                    <Cards item = {item} key = {item.id}/>
                ))}
            </Slider>
        </div>
        </div>
    </>
  )
}

export default Freebook