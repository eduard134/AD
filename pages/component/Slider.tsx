import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { GiCheckMark } from "react-icons/gi";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import dumbbells from "../image/dumbbells.jpg";
import dumbbells2 from "../image/dumbbells2.jpg";
import dumbbells3 from "../image/dumbbells3.jpg";
import dumbbells4 from "../image/dumbbells4.jpg";

import { Autoplay, EffectCoverflow } from "swiper/modules";

function App() {
  return (
    <div
      className="max-w-full py-16 container select-none mt-24"
      id="Abonamente"
    >
      <div className="text-4xl md:text-5xl text-white uppercase tracking-wide font-semibold text-custom p-8">
        <h1 className="text-center font-bold font-popular">Abonamente</h1>
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        slidesPerView={"auto"}
        initialSlide={5}
        coverflowEffect={{
          rotate: 10,
          stretch: 60,
          depth: 50,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        modules={[EffectCoverflow]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          420: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <div className="flex justify-center items-center h-72 ">
            <div className=" w-3/5 relative flex h-full rounded-lg box-shadow-shadow2">
              <Image
                src={dumbbells2}
                className="object-cover rounded-lg -z-10 opacity-75"
                alt=""
                layout="fill"
                objectFit="cover"
              />
              <div className="font-semibold py-6 px-8">
                <p className="text-white">SupremeFit</p>
                <p className="font-bold text-5xl text-white mb-4 mt-4">
                  50 Lei
                </p>
                <div className="leading-tight text-lg flex text-desc mb-3">
                  <GiCheckMark className="mr-2 leading-tight h-5" />1 singură
                  ședință
                </div>
                <div className="leading-tight text-lg flex text-desc mb-3">
                  <GiCheckMark className="mr-2 leading-tight h-5" />
                  Oricând
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-72 ">
            <div className="w-3/5 relative flex h-full rounded-lg shadow-md">
              <Image
                src={dumbbells}
                className="object-cover rounded-lg opacity-95 -z-10"
                alt=""
                layout="fill"
                objectFit="cover"
              />
              <div className="font-semibold py-6 px-8">
                <p className="text-white">OptimumFit</p>
                <p className="font-bold text-5xl text-white mb-4 mt-4">
                  250 Lei
                </p>
                <div className="leading-tight text-lg flex text-desc mb-3">
                  <GiCheckMark className="mr-2 leading-tight h-5" />
                  Abonament lunar 8 ședințe
                </div>
                <div className="leading-tight text-lg flex text-desc mb-3">
                  <GiCheckMark className="mr-2 leading-tight h-5" />
                  Ora: 09:00 - 16:00
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-72 ">
            <div className="w-3/5 relative flex h-full rounded-lg shadow-md">
              <Image
                src={dumbbells}
                className="object-cover rounded-lg opacity-95 -z-10"
                alt=""
                layout="fill"
                objectFit="cover"
              />
              <div className="font-semibold py-6 px-8">
                <p className="text-white">PrimeFit</p>
                <p className="font-bold text-5xl text-white mb-4 mt-4">
                  330 Lei
                </p>
                <div className="leading-tight text-lg flex text-desc mb-3">
                  <GiCheckMark className="mr-2 leading-tight h-5" />
                  Abonament lunar 8 ședințe
                </div>
                <div className="leading-tight text-lg flex text-desc mb-3">
                  <GiCheckMark className="mr-2 leading-tight h-5" />
                  Ora: 09:00 - 22:00
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-72 ">
            <div className="w-3/5 relative flex h-full rounded-lg shadow-md">
              <Image
                src={dumbbells}
                className="object-cover rounded-lg opacity-95 -z-10"
                alt=""
                layout="fill"
                objectFit="cover"
              />
              <div className="font-semibold py-6 px-8">
                <p className="text-white">Premier</p>
                <p className="font-bold text-5xl text-white mb-4 mt-4">
                  330 Lei
                </p>
                <div className="leading-tight text-lg flex text-desc mb-3">
                  <GiCheckMark className="mr-2 leading-tight h-5" />
                  Abonament lunar 12 ședințe
                </div>
                <div className="leading-tight text-lg flex text-desc mb-3">
                  <GiCheckMark className="mr-2 leading-tight h-5" />
                  Ora: 09:00 - 16:00
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-72 ">
            <div className="w-3/5 relative flex h-full rounded-lg shadow-md">
              <Image
                src={dumbbells3}
                className="object-cover rounded-lg opacity-75  -z-10"
                alt=""
                layout="fill"
                objectFit="cover"
              />
              <div className="font-semibold py-6 px-8">
                <p className="text-white">Cel mai POPULAR #2</p>
                <p className="font-bold text-5xl text-white mb-4 mt-4">
                  450 Lei
                </p>
                <div className="leading-tight text-lg flex text-desc mb-3">
                  <GiCheckMark className="mr-2 leading-tight h-5" />
                  Abonament lunar nelimitat
                </div>
                <div className="leading-tight text-lg flex text-desc mb-3">
                  <GiCheckMark className="mr-2 leading-tight h-5" />
                  Oricând
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-72 ">
            <div className="w-3/5 relative flex h-full rounded-lg shadow-md">
              <Image
                src={dumbbells3}
                className="object-cover rounded-lg opacity-75  -z-10"
                alt=""
                layout="fill"
                objectFit="cover"
              />
              <div className="font-semibold py-6 px-8">
                <p className="text-white">Cel mai POPULAR #1</p>
                <p className="font-bold text-5xl text-white mb-4 mt-4">
                  390 Lei
                </p>
                <div className="leading-tight text-lg flex text-desc mb-3">
                  <GiCheckMark className="mr-2 leading-tight h-5" />
                  Abonament lunar 12 ședințe
                </div>
                <div className="leading-tight text-lg flex text-desc mb-3">
                  <GiCheckMark className="mr-2 leading-tight h-5" />
                  Oricând
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-72 ">
            <div className="w-3/5 relative flex h-full rounded-lg shadow-md">
              <Image
                src={dumbbells3}
                className="object-cover rounded-lg opacity-75  -z-10"
                alt=""
                layout="fill"
                objectFit="cover"
              />
              <div className="font-semibold py-6 px-8">
                <p className="text-white">Cel mai POPULAR #3</p>
                <p className="font-bold text-5xl text-white mb-4 mt-4">
                  1200 Lei
                </p>
                <div className="leading-tight text-lg flex text-desc mb-3">
                  <GiCheckMark className="mr-2 leading-tight h-5" />3 luni
                  nelimitat
                </div>
                <div className="leading-tight text-lg flex text-desc mb-3">
                  <GiCheckMark className="mr-2 leading-tight h-5" />
                  Oricând
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-72 ">
            <div className="w-3/5 relative flex h-full rounded-lg shadow-md">
              <Image
                src={dumbbells3}
                className="object-cover rounded-lg opacity-75  -z-10"
                alt=""
                layout="fill"
                objectFit="cover"
              />
              <div className="font-semibold py-6 px-8">
                <p className="text-white">Suprem 6</p>
                <p className="font-bold text-5xl text-white mb-4 mt-4">
                  2200 Lei
                </p>
                <div className="leading-tight text-lg flex text-desc mb-3">
                  <GiCheckMark className="mr-2 leading-tight h-5" />6 luni
                  nelimitat
                </div>
                <div className="leading-tight text-lg flex text-desc mb-3">
                  <GiCheckMark className="mr-2 leading-tight h-5" />
                  Oricând
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-72 ">
            <div className="w-3/5 relative flex h-full rounded-lg shadow-md">
              <Image
                src={dumbbells3}
                className="object-cover rounded-lg opacity-75 -z-10"
                alt=""
                layout="fill"
                objectFit="cover"
              />
              <div className="font-semibold py-6 px-8">
                <p className="text-white">Infinity 12</p>
                <p className="font-bold text-5xl text-white mb-4 mt-4">
                  4000 Lei
                </p>
                <div className="leading-tight text-lg flex text-desc mb-3">
                  <GiCheckMark className="mr-2 leading-tight h-5" />
                  12 luni nelimitat
                </div>
                <div className="leading-tight text-lg flex text-desc mb-3">
                  <GiCheckMark className="mr-2 leading-tight h-5" />
                  Oricând
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-72 ">
            <div className="w-3/5 relative flex h-full rounded-lg shadow-md">
              <Image
                src={dumbbells4}
                className="object-cover rounded-lg -z-10 opacity-70"
                alt=""
                layout="fill"
                objectFit="cover"
              />
              <div className="font-semibold py-6 px-8">
                <p className="text-white">Sesiunea Stelară</p>
                <p className="font-bold text-5xl text-white mb-4 mt-4">
                  160 Lei
                </p>
                <div className="leading-tight text-lg flex text-desc mb-3">
                  <GiCheckMark className="mr-2 leading-tight h-5" />1 ședință
                  personală
                </div>
                <div className="leading-tight text-lg flex text-desc mb-3">
                  <GiCheckMark className="mr-2 leading-tight h-5" />
                  Oricând
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-72">
            <div className="w-3/5 relative flex h-full rounded-lg shadow-md">
              <Image
                src={dumbbells4}
                className="object-cover rounded-lg -z-10 opacity-70"
                alt=""
                layout="fill"
                objectFit="cover"
              />
              <div className="font-semibold py-6 px-8">
                <p className="text-white">FitPass Gold</p>
                <p className="font-bold text-5xl text-white mb-4 mt-4">
                  1700 Lei
                </p>
                <div className="leading-tight text-lg flex text-desc mb-3">
                  <GiCheckMark className="mr-2 leading-tight h-5" />
                  12 ședințe personale
                </div>
                <div className="leading-tight text-lg flex text-desc mb-3">
                  <GiCheckMark className="mr-2 leading-tight h-5" />
                  Oricând
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
