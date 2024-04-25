import React, { useState } from "react";
import Image from "next/image";
import cross from "../image/close.png";
import googleCalendar from "../image/calendar.png";

const PopupButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
    // blur NavBar
    const nb = document.querySelector(".nb");
    if (nb !== null) {
      nb.classList.add("blur");
    }
    // blur Abonamente
    const container = document.querySelector(".container");
    if (container !== null) {
      container.classList.add("blur");
    }
    // blur Footer
    const footer = document.querySelector(".footer");
    if (footer !== null) {
      footer.classList.add("blur");
    }
    // blur Header
    const header = document.querySelector(".header");
    if (header !== null) {
      header.classList.add("blur");
    }
    // blur Header1
    const header1 = document.querySelector(".header1");
    if (header1 !== null) {
      header1.classList.add("blur");
    }
    // blur Header2
    const header2 = document.querySelector(".header2");
    if (header2 !== null) {
      header2.classList.add("blur");
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    // blur Navbar
    const nb = document.querySelector(".nb");
    if (nb !== null) {
      nb.classList.remove("blur");
    }
    // blur Abonamente
    const container = document.querySelector(".container");
    if (container !== null) {
      container.classList.remove("blur");
    }
    // blur Footer
    const footer = document.querySelector(".footer");
    if (footer !== null) {
      footer.classList.remove("blur");
    }
    // blur Header
    const header = document.querySelector(".header");
    if (header !== null) {
      header.classList.remove("blur");
    }
    // blur Header1
    const header1 = document.querySelector(".header1");
    if (header1 !== null) {
      header1.classList.remove("blur");
    }
    // blur Header2
    const header2 = document.querySelector(".header2");
    if (header2 !== null) {
      header2.classList.remove("blur");
    }
  };

  return (
    <>
      <button
        onClick={openPopup}
        className="bg-white py-4 px-7 rounded-md mt-5 text-black-700 border-[#c03167] border-2 group-hover:bg-gradient-to-br from-[#f9333a] via-[#c03167] to-[#E77CA4] group-hover:text-white hover:transition-all duration-300 header2 font-public"
        id="rightButton"
      >
        Orar
      </button>
      {isPopupOpen && (
        <div className="fixed z-10 p-2 sm:p-4 lg:p-0 inset-0 flex items-center justify-center">
          <div className=" py-2 w-full sm:h-1/12 lg:w-2/3 flex flex-col bg-white rounded-2xl overflow-hidden">
            <header className="px-4 py-2 flex items-center justify-between">
              <div className="flex items-center">
                <Image
                  src={googleCalendar}
                  alt="calendar"
                  className="mr-2 w-12 h-12"
                  width="0"
                  height="0"
                />
                <h1 className="mr-10 text-xl text-gray-500 fond-bold">
                  Calendar
                </h1>
              </div>
              <button
                className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl"
                onClick={closePopup}
              >
                <span className="pl-3 pr-7 font-semibold ml-2 text-gray-500">
                  Închide
                </span>
                <Image
                  src={cross}
                  width={15}
                  height={15}
                  alt=""
                  className="mr-2 -mt-0.5"
                />
              </button>
            </header>
            <div className="flex flex-1 ">
              <div className="flex-1 grid grid-cols-7 ">
                <div className=" flex flex-col">
                  <header className="flex flex-col py-2 items-center">
                    <p className="text-sm mt-1">L</p>
                    <div className="bg-gradient-to-br from-[#f9333a] via-[#c03167] to-[#E77CA4] border-2 border-[#c03167] w-5/6 mt-5 py-3 rounded">
                      <span className="text-[13px] text-white">
                        09:00 - 22:00
                      </span>
                    </div>
                  </header>
                </div>
                <div className=" flex flex-col">
                  <header className="flex flex-col py-2 items-center">
                    <p className="text-sm mt-1">M</p>
                    <div className="bg-white border-2 border-[#c03167] w-5/6 mt-5 py-3 rounded">
                      <span className="text-[13px] text-black">
                        09:00 - 22:00
                      </span>
                    </div>
                  </header>
                </div>
                <div className=" flex flex-col">
                  <header className="flex flex-col py-2 items-center">
                    <p className="text-sm  mt-1">M</p>
                    <div className="bg-gradient-to-br from-[#f9333a] via-[#c03167] to-[#E77CA4] border-2 border-[#c03167] w-5/6 mt-5 py-3 rounded">
                      <span className="text-[13px] text-white">
                        09:00 - 22:00
                      </span>
                    </div>
                  </header>
                </div>
                <div className=" flex flex-col">
                  <header className="flex flex-col py-2 items-center">
                    <p className="text-sm mt-1">J</p>
                    <div className="bg-white border-2 border-[#c03167] w-5/6 mt-5 py-3 rounded">
                      <span className="text-[13px] text-black">
                        09:00 - 22:00
                      </span>
                    </div>
                  </header>
                </div>
                <div className=" flex flex-col">
                  <header className="flex flex-col py-2 items-center">
                    <p className="text-sm mt-1">V</p>
                    <div className="bg-gradient-to-br from-[#f9333a] via-[#c03167] to-[#E77CA4] border-2 border-[#c03167] w-5/6 mt-5 py-3 rounded">
                      <span className="text-[13px] text-white">
                        {" "}
                        09:00 - 22:00
                      </span>
                    </div>
                  </header>
                </div>
                <div className=" flex flex-col">
                  <header className="flex flex-col py-2 items-center">
                    <p className="text-sm mt-1">S</p>
                    <div className="bg-white border-2 border-[#c03167] w-5/6 mt-5 py-1 rounded">
                      <span className="text-[13px] text-black">
                        09:00 - 20:00
                      </span>
                    </div>
                  </header>
                </div>
                <div className=" flex flex-col">
                  <header className="flex flex-col py-2 items-center">
                    <p className="text-sm mt-1">D</p>
                    <div className="bg-gradient-to-br from-[#f9333a] via-[#c03167] to-[#E77CA4] border-2 border-[#c03167] w-5/6 mt-5  rounded">
                      <span className="text-[13px] text-white">
                        11:00 - 16:00
                      </span>
                    </div>
                  </header>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupButton;
