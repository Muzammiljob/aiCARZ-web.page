
"use client"
import React from 'react'
import Image from 'next/image'

 const Bar = ({ images, speed = 5000 }) => {
    return (
      <div className="inner">
        <div className="wrapper">
          <section id='sec' style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className="image11" key={id}>
                <Image src={image} alt={id} />
              </div>
            ))}
          </section>
          <section id='sec' style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className="image11" key={id}>
                <Image src={image} alt={id} />
              </div>
            ))}
          </section>
          <section style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className="image11" key={id}>
                <Image src={image} alt={id} />
              </div>
            ))}
          </section>
        </div>
      </div>
    );
  };
  
  
  
 
  export default Bar 
