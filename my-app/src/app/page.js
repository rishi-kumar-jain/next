import React from "react";
import styles from "./styels.css";
import pic from "../../public/mapIndia.jpeg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="App">
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
