import React from "react";
import styles from "./styles.css";
import pic from "../../public/mapIndia.jpeg";
import Image from "next/image";


// import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";

// export const AcmeLogo = () => {
//   return (
//     <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
//       <path
//         clipRule="evenodd"
//         d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
//         fill="currentColor"
//         fillRule="evenodd"
//       />
//     </svg>
//   );
// };







export default function Home() {
  return (
    <div className="App">

        {/* <Navbar>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="#">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar> */}






      <div className="headingTop">
        <h1>Mp Board Class 10th Social Science Fundamentals</h1>
        <h2>
        You must have to go through these questions there are high chances for
        these topic to be seen in exam hall :{")"} !
        </h2>
      </div>
      
      <div className="imageBox">
        <Image src={pic} alt="map of india"></Image>
      </div>
      
    <div className="questionBox">
      <h3>Important Questions</h3>
      <div>
          <ol>
            <li>fredric serrieu french artist</li>
            <li>obstacles of democracy</li>
            <li>
              92 percent of laborers in India are working for the unorganized sector
            </li>
            <li>organised sector vs unorganized sector</li>
            <li>jyotiba phule --- gulam giri</li>
            <li>isi mark</li>
            <li>
              industrial revolution -- first started in great britain --- long ans
              1760{" "}
            </li>
            <li>organised sector vs unorganized sector</li>
            <li>Union list ---- fedrel</li>
            <li>
              Resources can be divided into two categories on the basis of tier
              availability
            </li>
            <li>These two categories are renewable and non renewable resources.</li>
            <li>
              On the basis of their origin, resources can be classified as biotic
              resources and abiotic resources
            </li>
            <li>Best quality of coal : anthracite</li>
            <li>soil erosion </li>
            <li>globalisation</li>
            <li>right to information</li>
            <li>renewable vs non renewable ,,,,, conventional</li>
            <li>primary secondary tertriary sectors --- basic industries--- </li>
            <li>non cooperation moment </li>
            <li>
              civil disobidient movement is movement k doran jungle satyagraha hua
              tha pad lena !{" "}
            </li>
            <li>success factors and obstacles of democracy (long ans)</li>
            <li> 1857 revolt (meerut)</li>
            <li>federal govrnment</li>
            <li>non cooperation moment</li>
            <li>
              {" "}
              lok sbha rajyashbha , how memebers are elected and bills are passed?{" "}
            </li>
            <li>consumer rights , exploitation, awareness </li>
            <li>green revolution 26. economic devlopment </li>
            <li> legislative , executive and judiciary assemblies </li>
            <li>vande matram ---- written by BANKIM CHADRA CHATTOPADHAY </li>
            <li>india vision 2020 published in 1998 </li>
            <li>
              five years plans first five year pln wht imp steps were taken in each
              five year plan current plan
            </li>
            <li></li>
            <li></li>
          </ol>
      </div>
    </div>
      
    </div>
  );
}
