'use client';

import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const Banner: React.FC = () => {
  const sketchRef = useRef<HTMLDivElement>(null);
  const p5InstanceRef = useRef<p5 | null>(null);

  useEffect(() => {
    const sketch = (p: p5) => {
      let img: p5.Image;
      let bigJohnFont: p5.Font;
      let dmSansFont: p5.Font;

      p.preload = () => {
        img = p.loadImage('/assets/project1_banner.png');
        bigJohnFont = p.loadFont('/fonts/BigJohn.otf');
        dmSansFont = p.loadFont('/fonts/DMSans.ttf');
      };

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.textAlign(p.LEFT, p.TOP);
        p.noLoop();
      };

      p.draw = () => {
        p.background('#B252CC');

        // Text setup
       
        p.textFont(bigJohnFont);
        p.textSize(64);
         p.fill('#F3EED8');
        p.text('MAKING TRAVEL FORUMS RELEVANT AGAIN', 40, 200, p.windowWidth / 2);

        p.textFont(dmSansFont);
        p.textSize(32);
        p.text('Community-driven travel app for reliable, offline info for Gen Z backpackers.', 40, 420, p.windowWidth / 2);

        // Image setup
        const imgWidth = p.windowHeight * 1;
        const imgHeight = p.windowHeight ;
        p.image(img, p.windowWidth - imgWidth + 150, 81, imgWidth * 0.9, imgHeight * 0.9);
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        p.draw();
      };
    };

    // Initialize p5 instance
    p5InstanceRef.current = new p5(sketch, sketchRef.current);

    return () => {
      // Clean up p5 instance on component unmount
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove();
      }
    };
  }, []); // Empty dependency array ensures useEffect runs only once

  return <div ref={sketchRef} className="p5-container" />;
};

export default Banner;
