"use client";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // adaptiveHeight: true
  };
  return (
    

    <Slider {...settings} className=" w-full">
      
      <div className=" relative  text-white text-center  text-3xl font-bold">
     

        <img className=" w-full  "  src="https://fakeimg.pl/350x200/?text=World&font=lobster" alt="" />
      </div>
      <div className="   text-white text-center  text-3xl font-bold">
        <img src="https://fakeimg.pl/350x200/?text=World&font=lobster" alt="" />
      </div>
      <div className="  text-white text-center  text-3xl font-bold">
        <img src="https://fakeimg.pl/350x200/?text=World&font=lobster" alt="" />
      </div>
      <div className="  text-white text-center  text-3xl font-bold">
        <img src="https://fakeimg.pl/350x200/?text=World&font=lobster" alt="" />
      </div>
      <div className="  text-white text-center  text-3xl font-bold">
        <img src="https://fakeimg.pl/350x200/?text=World&font=lobster" alt="" />
      </div>
      <div className="  text-white text-center  text-3xl font-bold">
        <img src="https://fakeimg.pl/350x200/?text=World&font=lobster" alt="" />
      </div>
    </Slider>
      
  );
}
