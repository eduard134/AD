import React from "react";
import Slider from "./component/Slider";
import Head from "next/head";
import PopupButton from "./component/Orar";

export default function Home() {
  function scrollToSection(Abonamente: string) {
    const element = document.getElementById(Abonamente);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <div>
        <Head>
          <title>A&D</title>
          <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
        </Head>
      </div>
      <div></div>
      <div className="justify-center flex items-center flex-col text-center w-screen h-[80vh]">
        <p className="text-4xl sm:text-6xl leading-[1.15] font-extrabold text-white header">
          Fitnessul este o călătorie <br />
          <span className="bg-cover bg-clip-text text-transparent bg-gradient-to-br from-[#f9333a] to-[#c03167]">
            Hai
          </span>{" "}
          să începem!
        </p>
        <div className="flex group">
          <button
            className="bg-gradient-to-br from-[#f9333a] via-[#c03167] to-[#E77CA4] py-4 px-7 rounded-md mt-5 border-2 text-white mr-4 header1 group-hover:text-black hover:transition-all duration-300 border-[#c03167] group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-white font-public"
            onClick={() => scrollToSection("Abonamente")}
            id="leftButton"
          >
            Vezi Abonamente
          </button>
          <PopupButton />
        </div>
      </div>
      <div className="absolute inset-0 z-[-5] overflow-hidden">
        <video
          width="100%"
          height="100vh"
          className="w-full h-full object-cover z-[-5]"
          autoPlay
          loop
          muted
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 w-full h-full bg-black bg-opacity-60 z-0"></div>
      </div>
      <Slider />
    </>
  );
}
