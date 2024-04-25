import Link from "next/link";
import Image from "next/image";

import insta from "../image/instagram.png";
import facebook from "../image/facebook.png";
import phone from "../image/phone.png";
import location from "../image/location.png";
import mail from "../image/email.png";

const Footer = () => {
  return (
    <div className="bottom-0 flex flex-col sm:flex-row justify-between bg-[black]  text-white p-5 sm:p-10  lg:p-20 sm:items-center">
      <div className="flex justify-center sm:mr-10 lg:mr-0">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="py-4"
          />
        </Link>
      </div>
      <div className="mt-4 sm:mt-0 sm:mr-20 lg:mr-0">
        <h1 className="mb-5 sm:mt-0 sm:mb-0 text-3xl font-bold sm:text-2xl">
          Social
        </h1>
        <div className="flex">
          <div className="mb-4 sm:mb-2 sm:mt-6 ">
            <Link href="https://www.instagram.com/ad_fitness_ialoveni/">
              <Image
                src={insta}
                alt="instagram"
                width={30}
                height={30}
                className="filter invert-[100%] sepia-0 saturate-0 hue-rotate-[292deg] brightness-[102%] contrast-[105%] hover:invert-[55%] hover:saturate-[5963%] hover:hue-rotate-[179deg] hover:brightness-[92%] hover:contrast-[73%] transform hover:scale-110 transition-all duration-150 linear z-10"
              />
            </Link>
          </div>
          <div className="mb-2 sm:mb-2 sm:mt-6 ml-4 sm:ml-3">
            <Link href="https://www.facebook.com/adfitnesscentru?mibextid=LQQJ4d">
              <Image
                src={facebook}
                alt="facebook"
                width={30}
                height={30}
                className="filter invert-[100%] sepia-0 saturate-0 hue-rotate-[292deg] brightness-[102%] contrast-[105%] hover:invert-[55%] hover:saturate-[5963%] hover:hue-rotate-[179deg] hover:brightness-[92%] hover:contrast-[73%] transform hover:scale-110 transition-all duration-150 linear"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="sm:mr-20 lg:mr-0">
        <h1 className="mb-5 font-bold mt-10 sm:mt-10 lg:mt-9 sm:mb-0 text-3xl sm:text-2xl">
          Menu
        </h1>
        <div className="mb-2 sm:mb-3 sm:mt-7  hover:text-gray-500">
          <Link href="/">Acasă</Link>
        </div>
        <div className="mb-2 sm:mb-3 hover:text-gray-500">
          <Link href="/about">Despre Noi</Link>
        </div>
        <div className="hover:text-gray-500">
          <Link href="/suplement">Suplimente</Link>
        </div>
      </div>

      <div className=" sm:mt-7 lg:mt-0 sm:mb-0">
        <h1 className="mt-10 sm:mb-0 text-3xl sm:text-2xl mb-5 font-bold">
          Contacte
        </h1>
        <div className=" flex mb-3 sm:mb-3 sm:mt-5  ">
          <Image
            src={location}
            alt=""
            width={25}
            height={15}
            className="filter invert-[100%] sepia-0 saturate-0 hue-rotate-[292deg] brightness-[102%] contrast-[105%] mr-3 sm:w-6 sm:h-6  w-7 h-5"
          />
          <span>Bulevardul Alexandru cel Bun 80, Ialoveni 6801, Moldova</span>
        </div>
        <div className="flex mb-3">
          <Image
            src={phone}
            alt=""
            width={25}
            height={15}
            className="filter invert-[100%] sepia-0 saturate-0 hue-rotate-[292deg] brightness-[102%] contrast-[105%] mr-3 w-5 h-5"
          />
          <span>076739600</span>
        </div>
        <div className="flex mb-3 ">
          <Image
            src={mail}
            alt=""
            width={25}
            height={15}
            className="filter invert-[100%] sepia-0 saturate-0 hue-rotate-[292deg] brightness-[102%] contrast-[105%] mr-3 w-6 h-6"
          />
          <span>suladanu@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
