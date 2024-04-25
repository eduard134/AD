import Head from "next/head";
import Image from "next/image";
import Review1 from "./image/dana.png";
import Review2 from "./image/alexandru.png";
import Review3 from "./image/sergiu.png";
import ghena_before from "./image/ghena_before.png";
import ghena_after from "./image/ghena_after.png";
import misha_before from "./image/misha_before.png";
import misha_after from "./image/misha_after.png";
import arrow2 from "./image/arrow2.png";

const Suplement = () => {
  return (
    <>
      <div>
        <Head>
          <title>A&D</title>
          <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
        </Head>
      </div>
      <div className="absolute z-[-2] top-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100%"
          height="auto"
          preserveAspectRatio="xMidYMid slice"
          className="bg-cover1 h-[160vh] sm:h-[70vh] lg:h-[170vh]"
        >
          <g mask="url(#SvgjsMask1112)" fill="none">
            <rect
              width="1920"
              height="1420"
              x="0"
              y="0"
              fill="rgba(33, 33, 33, 1)"
            ></rect>
            <path
              d="M0,824.339C148.937,795.831,236.197,646.394,371.826,578.572C531.154,498.899,752.851,534.568,861.61,393.484C971.479,250.959,985.221,35.392,919.778,-132.244C856.803,-293.556,644.95,-329.76,529.038,-458.414C416.536,-583.284,412.394,-809.768,255.366,-869.696C99.549,-929.162,-57.271,-786.861,-218.355,-743.649C-384.368,-699.115,-579.147,-727.723,-706.046,-611.792C-836.175,-492.91,-913.974,-303.128,-891.981,-128.248C-870.832,39.923,-668.094,118.804,-594.939,271.7C-523.869,420.237,-596.78,628.813,-476.135,740.88C-355.638,852.81,-161.53,855.257,0,824.339"
              fill="#1b1b1b"
            ></path>
            <path
              d="M1920 1749.516C2093.569 1792.1309999999999 2267.25 1947.216 2430.328 1874.086 2588.864 1802.993 2596.027 1579.469 2659.698 1417.809 2719.782 1265.257 2818.0280000000002 1116.512 2792.491 954.5550000000001 2767.054 793.2339999999999 2627.43 683.0219999999999 2523.919 556.701 2417.246 426.52200000000005 2340.003 246.76199999999994 2177.281 203.78099999999995 2014.872 160.88300000000004 1854.189 267.29600000000005 1702.65 339.773 1571.5520000000001 402.47400000000005 1465.315 494.635 1359.933 594.6990000000001 1243.251 705.4929999999999 1082.4740000000002 797.117 1054.188 955.515 1025.8110000000001 1114.421 1122.886 1269.6100000000001 1215.844 1401.577 1298.136 1518.401 1420.658 1594.341 1548.77 1657.644 1665.4180000000001 1715.2820000000002 1793.642 1718.492 1920 1749.516"
              fill="#272727"
            ></path>
          </g>
          <defs>
            <mask id="SvgjsMask1112">
              <rect width="1920" height="1420" fill="#ffffff"></rect>
            </mask>
          </defs>
        </svg>
      </div>
      <div>
        <div className="sm:flex block items-center justify-center">
          <div className="sm:w-[33%]">
            <Image src={ghena_before} alt="Prima Transformare" />
          </div>
          <div className="rotated-image   ">
            <Image src={arrow2} alt="Prima Transformare" />
          </div>
          <div className="sm:w-[33%]">
            <Image src={ghena_after} alt="" />
          </div>
        </div>
        <div className="sm:flex block items-center justify-center mt-10">
          <div className="sm:w-[33%]">
            <Image src={misha_after} alt="" />
          </div>
          <div className="rotated-image1">
            <Image src={arrow2} alt="Prima Transformare" />
          </div>
          <div className="sm:w-[33%]">
            <Image src={misha_before} alt="" />
          </div>
        </div>
      </div>

      <h1 className="text-white text-5xl tracking-wide text-center mt-20 sm:mb-10 mb-[50px] font-bold font-popular">
        Recenzii
      </h1>
      <div className="sm:flex justify-center ">
        <div className="bg-[#242424] rounded-lg p-4 text-white md:w-[30%] md:mx-5 lg:w-[27%] h-[20%] sm:my-8 my-10 lg:mx-4 mx-4">
          <div className="flex items-center justify-between relative mb-6">
            <div>
              <p className=" font-public text-[#FEFEFE] text-lg">
                Dana Cojuhari
              </p>
              <div>⭐⭐⭐⭐⭐</div>
            </div>
            <div className="w-[20%] absolute right-0 -top-9 md:-top-7 md:-right-1 lg:-top-9">
              <Image src={Review1} alt="Review" />
            </div>
          </div>

          <div className="text-[#C0C1C1] ">
            The Best of the Best💪❤ Personalul foarte amabil și atmosfera
            perfectă pentru a începe o schimbare 💪💪💪🔥, personalul este
            prietenos și profesionist, mereu dispus să ofere sfaturi și să
            ajute.
          </div>
        </div>
        <div className="bg-[#242424] rounded-lg p-4 text-white md:w-[30%] md:mx-5 lg:w-[27%] h-[20%] sm:my-8 my-10 lg:mx-4 mx-4">
          <div className="flex items-center justify-between relative mb-6">
            <div>
              <p className=" font-public text-[#FEFEFE] text-lg">
                Alexandru Tonu
              </p>
              <div>⭐⭐⭐⭐⭐</div>
            </div>
            <div className="w-[20%] absolute right-0 -top-9 md:-top-7 md:-right-1 lg:-top-9">
              <Image src={Review2} alt="Review" />
            </div>
          </div>

          <div className="text-[#C0C1C1] ">
            Echipamentele sunt în general în stare bună, pentru prețul pe care
            îl plătim, nu am nimic de reproșat, iar programul lor flexibil face
            să fie ușor să încorporezi antrenamentele în rutina ta zilnică.
          </div>
        </div>
        <div className="bg-[#242424] rounded-lg p-4 text-white md:w-[30%] md:mx-5 lg:w-[27%] h-[20%] sm:my-8 my-10 lg:mx-4 mx-4">
          <div className="flex items-center justify-between relative mb-6">
            <div>
              <p className=" font-public text-[#FEFEFE] text-lg">
                Sergiu Alistar
              </p>
              <div>⭐⭐⭐⭐⭐</div>
            </div>
            <div className="w-[20%] rounded-[50%] overflow-hidden absolute right-0 -top-9 md:-top-7 md:-right-1 lg:-top-9">
              <Image src={Review3} alt="Review" />
            </div>
          </div>

          <div className="text-[#C0C1C1] ">
            O sală comodă în centrul orașului, prețuri accesibile, atmosferă
            este prietenoasă, simt mereu că sunt într-o comunitate de oameni
            dedicați sănătății și fitnessului. Personal foarte amabil)
          </div>
        </div>
      </div>
    </>
  );
};

export default Suplement;
