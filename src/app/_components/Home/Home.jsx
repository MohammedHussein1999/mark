
import React from "react";
import SimpleSlider from "./Silecs/Silder";
import Cards from "../cards/Cards";
import SlideProduct from "./Silecs/SlideProduct";



export default function Home() {
  return (
    <div className=" grid grid-cols-1 gap-0 content-center  	  grid-rows-3	">
      <header className="w-full">

      <SimpleSlider />
      </header>
      <div className="bg-[#eee]">

      <SlideProduct />
      </div>
      <div className="p-5 flex flex-wrap gap-16  w-full justify-evenly">
        <Cards/>
        <Cards/>
        <Cards/>
      </div>
    </div>
  );
}
