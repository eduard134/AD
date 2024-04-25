import Head from "next/head";
import Image from "next/image";
import React from "react";
import bifa from "./image/mark.png";
import ph from "./image/about_ph.png";

const About = () => {
  return (
    <div>
      <Head>
        <title>A&D</title>
        <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
      </Head>
      <div className="flex flex-col sm:flex-row justify-center mb-10 mt-10 items-center">
        <div className="md:max-w-[450px] lg:max-w-[600px] font-public p-6 sm:p-0">
          <div className="sm:mt-10 mt-0">
            <h1 className=" text-[#FEFEFE] text-4xl font-bold">
              De ce trebuie să alegi A&D
            </h1>
          </div>
          <div className="mt-10">
            <div className="flex items-center">
              <Image src={bifa} alt="bifa" width={30} />
              <h1 className="ml-5 text-white text-2xl ">
                Antrenament Personalizat
              </h1>
            </div>
            <p className="text-[#C0C1C3] text-md mt-2">
              Sala dispune de antrenori specializați în antrenament
              personalizat, care creează programe adaptate fiecărui membru.
              Aceștia oferă îndrumare, monitorizare și motivație pentru
              obținerea rezultatelor dorite.
            </p>
            <div className="flex items-center mt-6">
              <Image src={bifa} alt="bifa" width={30} />
              <h1 className="ml-5 text-white text-2xl"> Echipamente Moderne</h1>
            </div>
            <p className="text-[#C0C1C3] text-md mt-2">
              Sala modernă de fitness oferă echipamente de ultimă generație
              precum benzi de alergat, biciclete eliptice, steppere, aparate de
              forță și greutăți libere, acoperind o gamă variată de opțiuni
              pentru antrenamentul cardiovascular, de forță și dezvoltarea
              musculară.
            </p>
            <div className="flex items-center mt-6">
              <Image src={bifa} alt="bifa" width={30} />
              <h1 className="ml-5 text-[#F1F1F2] text-2xl">
                {" "}
                Vestiare și dușuri
              </h1>
            </div>
            <p className="text-[#C0C1C3] text-md mt-2">
              Lângă sala de sport sunt vestiare separate pentru bărbați și
              femei, cu dulapuri pentru depozitarea obiectelor personale și a
              hainelor. Există și dușuri pentru igienizare după antrenament.
            </p>
            <div className="flex items-center mt-6">
              <Image src={bifa} alt="bifa" width={30} />
              <h1 className="ml-5 text-white text-2xl">
                {" "}
                Supraveghere și asistență
              </h1>
            </div>
            <p className="text-[#C0C1C3] text-md mt-2">
              În sală, personal instruit oferă asistență și supraveghere în
              timpul antrenamentelor, garantând respectarea regulilor de
              siguranță și utilizarea corectă a echipamentelor.
            </p>
          </div>
        </div>
        <div className="sm:w-[35%] w-[70%] mt-10">
          <Image src={ph} alt="ab-img" />
        </div>
      </div>
    </div>
  );
};

export default About;
