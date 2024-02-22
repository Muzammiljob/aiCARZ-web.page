
"use client"
import React from 'react';
import Bar from './banner';
import Audi from './logos/audi.png';
import BMW from './logos/bmw.png';
import Ford from './logos/ford.png';
import Tesla from "./logos/tesla.png";

import Toyota from './logos/toyota.png';
import Lion from './logos/lion.png';
import Bird from './logos/bird.png';
import Bently from './logos/bently.png';
import Jaguar from './logos/jaguar.png';
import Kia from './logos/kia.png';
import Landover from './logos/landrover.png';
import Image from "next/image";
import "./styles.css";

const App = () => {
  const images = [
    Audi,   
    BMW,
    Ford,
    Tesla,
    Toyota,
    Lion,
    Bird,
    Bently,
    Jaguar,
    Kia,
    Landover
  ].map((image, index) => ({
    id: index,  // Using index as id temporarily
    image
  }));

  return (
    <div>
      <div className="App">
        

        <Bar images={images} speed={50000} />
      </div>
    </div>
  );
}

export default App;
