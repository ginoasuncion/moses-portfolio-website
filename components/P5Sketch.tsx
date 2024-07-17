'use client';

import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const P5Sketch: React.FC = () => {
  const sketchRef = useRef<HTMLDivElement>(null);
  const p5InstanceRef = useRef<p5 | null>(null);

  useEffect(() => {
    const sketch = (p: p5) => {
      let faceAwake = true;
      let hoveredX = -1;
      let hoveredY = -1;
      let baseFontSize = 60;
      let faceCenterX: number, faceCenterY: number;
      let imgSize: number, bgImgSize: number;
      let faceAngle = 0;
      let bgAngle = 0;
      const margin = 1;
      const borderRadius = 0;
      const awakeInterval = 5000; // Awake state duration: 5 seconds
      const sleepInterval = 250; // Sleep state duration: 3 seconds
      let lastSwitchTime = 0;

      let sleepImg: p5.Image, awakeImg: p5.Image, backgroundImg: p5.Image;
      let bigJohnFont: p5.Font, dmSansFont: p5.Font;

      // Initialize alpha values for grid cells
      const gridAlpha = [
        [0, 0],
        [0, 0]
      ];
      const targetAlpha = 255; // Target alpha value when hovered
      const fadeSpeed = 0.05; // Speed of fading effect

      p.preload = () => {
        // Load fonts from local files
        bigJohnFont = p.loadFont('/fonts/BigJohn.otf');
        dmSansFont = p.loadFont('/fonts/DMSans.ttf');
        
        sleepImg = p.loadImage("/assets/sleep_state.png");
        awakeImg = p.loadImage("/assets/awaken_state.png");
        backgroundImg = p.loadImage("/assets/background_state.png");
      };

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        calculateSizes();
        p.background('#F3EED8');
        lastSwitchTime = p.millis();
      };

      p.draw = () => {
        p.background('#F3EED8');

        const currentTime = p.millis();
        const elapsedTime = currentTime - lastSwitchTime;

        if ((faceAwake && elapsedTime > awakeInterval) || (!faceAwake && elapsedTime > sleepInterval)) {
          faceAwake = !faceAwake;
          lastSwitchTime = currentTime;
        }

        checkHover();

        drawGrid(); // Draw the grid first to place it behind other elements
        drawBackground(p.width / 2, p.height / 2);

        faceCenterX = p.width / 2 + p.sin(faceAngle) * 5; // Slight circular motion in X for face
        faceCenterY = p.height / 2 + p.cos(faceAngle) * 5; // Slight circular motion in Y for face
        faceAngle += 0.02; // Adjust speed of the face motion

        bgAngle += 0.001; // Adjust speed of the background rotation

        drawFace(faceCenterX, faceCenterY, faceAwake);
        drawEyes(faceCenterX, faceCenterY, p.mouseX, p.mouseY, faceAwake); // Draw the eyes on top of the face
        drawText();
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        calculateSizes();
      };

      function calculateSizes() {
        imgSize = p.min(p.width, p.height) * 0.28;
        bgImgSize = imgSize * 1.9;
      }

      function drawFace(centerX: number, centerY: number, awake: boolean) {
        let aspectRatio = awakeImg.width / awakeImg.height;
        let faceWidth = imgSize * 3;
        let faceHeight = imgSize * 3 / aspectRatio;

        let x = centerX - faceWidth / 2;
        let y = centerY - faceHeight / 2;

        if (awake) {
          p.image(awakeImg, x, y, faceWidth, faceHeight);
        } else {
          p.image(sleepImg, x, y, faceWidth, faceHeight);
        }
      }

      function drawBackground(centerX: number, centerY: number) {
        let aspectRatio = backgroundImg.width / backgroundImg.height;
        let bgWidth = bgImgSize * 0.85;
        let bgHeight = bgWidth / aspectRatio;

        let x = centerX - bgWidth / 2;
        let y = centerY - bgHeight / 2;

        p.push();
        p.translate(centerX, centerY);
        p.rotate(bgAngle); // Rotate background based on bgAngle
        p.imageMode(p.CENTER);
        p.image(backgroundImg, 0, 0, bgWidth, bgHeight);
        p.pop();
      }

      function drawGrid() {
        p.strokeWeight(0);
        p.stroke('#021C41');
      
        const colors = [
          [29, 100, 242],   // Top-left
          [194, 234, 189],  // Bottom-left
          [243, 176, 74],   // Top-right
          [120, 153, 212]   // Bottom-right
        ];
      
        for (let i = 0; i < 2; i++) {
          for (let j = 0; j < 2; j++) {
            let x = p.width / 4 + i * (p.width / 2 - margin) + margin / 2;
            let y = p.height / 4 + j * p.height / 2;
      
            let width = p.width / 2 - margin;
            let height = p.height / 2;
      
            let color = colors[i * 2 + j]; // Get the appropriate color
            p.fill(color[0], color[1], color[2], gridAlpha[i][j]); // Adjust the alpha value for transparency
      
            // Update alpha values based on hover state
            if (i === hoveredX && j === hoveredY) {
              gridAlpha[i][j] = p.lerp(gridAlpha[i][j], targetAlpha, fadeSpeed);
            } else {
              gridAlpha[i][j] = p.lerp(gridAlpha[i][j], 0, fadeSpeed);
            }
      
            p.rect(
              x - p.width / 4,
              y - p.height / 4,
              width,
              height,
              borderRadius,
              borderRadius,
              borderRadius,
              borderRadius
            ); // Rounded corners based on borderRadius
          }
        }
      }
      

      function drawText() {
        for (let i = 0; i < 2; i++) {
          for (let j = 0; j < 2; j++) {
            let x = p.width / 4 + i * (p.width / 2 - margin) + margin / 2;
            let y = p.height / 4 + j * p.height / 2 - 30; // Adjust this value to move the text higher

            // Match text alpha with grid cell alpha and use #F3EED8 color
            p.fill(243, 238, 216, gridAlpha[i][j]);
            p.stroke(243, 238, 216, gridAlpha[i][j]); // Set stroke color and alpha

            if (i === 0) {
              p.textAlign(p.LEFT, p.CENTER);
            } else {
              p.textAlign(p.RIGHT, p.CENTER);
            }

            let smallTextSize = baseFontSize * 0.40 * (p.width / 1280);
            let largeTextSize = baseFontSize * (p.width / 1280);

            if (i === 0 && j === 0) {
              // Use DM Sans for smaller text
              p.textFont(dmSansFont);
              p.textSize(smallTextSize);

              p.text('HI! I’M', x - p.width / 4 + 110, y - 80);
              
              // Use Big John for larger text
              p.textFont(bigJohnFont);
              p.textSize(largeTextSize);
              p.text('MIN HTET', x - p.width / 4 + 110, y - 30);
              // Draw "Moses"
              p.textFont(bigJohnFont);
              p.textSize(largeTextSize);
              p.text('ZAW A.K.A', x - p.width / 4 + 110, y + 40);
              p.text('MOSES', x - p.width / 4 + 110, y + 110);
            } else if (i === 1 && j === 0) {
              p.fill(19, 2, 14, gridAlpha[i][j]);
              p.textFont(dmSansFont);
              p.textSize(smallTextSize);
              p.text('EMPATHETIC', x + p.width / 4 - 110, y - 40);
              p.textFont(bigJohnFont);
              p.textSize(largeTextSize);
              p.text('Product', x + p.width / 4 - 110, y + 10);
              p.text('Designer', x + p.width / 4 - 110, y + 80);
            } else if (i === 0 && j === 1) {
              p.fill(19, 2, 14, gridAlpha[i][j]);
              p.textFont(dmSansFont);
              p.textSize(smallTextSize);
              p.text('FORMALLY', x - p.width / 4 + 110, y - 10);
              p.textFont(bigJohnFont);
              p.textSize(largeTextSize);
              p.text('GRAPHIC', x - p.width / 4 + 110, y + 40);
              p.text('DESIGNER', x - p.width / 4 + 110, y + 110);
            } else if (i === 1 && j === 1) {
              p.textFont(dmSansFont);
              p.textSize(smallTextSize);
              p.text('BASED IN', x + p.width / 4 - 110, y - 10);
              p.textFont(bigJohnFont);
              p.textSize(largeTextSize);
              p.text('BANGKOK', x + p.width / 4 - 110, y + 40);
              p.text('THAILAND', x + p.width / 4 - 110, y + 110);
            } else {
              p.textFont(bigJohnFont);
              p.textSize(largeTextSize);
              p.text('Hello', x - p.width / 4 + 20, y);
            }
          }
        }
      }

      function drawEyes(faceX: number, faceY: number, mouseX: number, mouseY: number, awake: boolean) {
        let eyeSize = imgSize * 0.175; // Size of the eye relative to the face size

        let eyeOffsetX = imgSize * 0.18;
        let eyeOffsetY = imgSize * 0.01;

        if (awake) {
          drawAwakeEye(faceX - eyeOffsetX, faceY - eyeOffsetY, mouseX, mouseY, eyeSize);
          drawAwakeEye(faceX + eyeOffsetX, faceY - eyeOffsetY, mouseX, mouseY, eyeSize);
        }
      }

      function drawAwakeEye(centerX: number, centerY: number, mouseX: number, mouseY: number, eyeSize: number) {
        let eyeRadius = eyeSize / 2;

        // Calculate angle to the mouse
        let angle = p.atan2(mouseY - centerY, mouseX - centerX);

        // Calculate the position of the pupil within the eye
        let pupilOffsetX = p.cos(angle) * eyeRadius * 0.4;
        let pupilOffsetY = p.sin(angle) * eyeRadius * 0.4;

        // Draw the eye white
        p.fill("#F3EED8");
        p.ellipse(centerX, centerY, eyeSize, eyeSize);

        // Draw the pupil
        p.fill("#292929");
        p.ellipse(centerX + pupilOffsetX, centerY + pupilOffsetY, eyeSize * 0.4, eyeSize * 0.4);
      }

      function drawSleepEye(centerX: number, centerY: number, eyeSize: number) {
        // Draw the closed eye
        let rectWidth = eyeSize * 0.3;
        let rectHeight = eyeSize * 0.6;

        p.fill(0);
        p.noStroke();
        p.rect(centerX - rectWidth / 2, centerY - rectHeight / 2, rectWidth, rectHeight);
      }

      function checkHover() {
        hoveredX = -1;
        hoveredY = -1;
        for (let i = 0; i < 2; i++) {
          for (let j = 0; j < 2; j++) {
            let x = p.width / 4 + i * (p.width / 2 - margin) + margin / 2;
            let y = p.height / 4 + j * (p.height / 2);

            let width = p.width / 2 - margin;
            let height = p.height / 2;

            if (
              p.mouseX > x - width / 2 &&
              p.mouseX < x + width / 2 &&
              p.mouseY > y - height / 2 &&
              p.mouseY < y + height / 2
            ) {
              hoveredX = i;
              hoveredY = j;
            }
          }
        }
      }
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

export default P5Sketch;
