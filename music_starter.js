// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(5, 15, 30); //stoney blue
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER);
  ellipseMode(CENTER);
  colorMode(RGB, 100, 100, 100);
  textSize(24);

  var vocalSize = map(vocal, 0, 100, 0, 150);
  var vocalStarPos = map(vocal, 0, 100, 0, 0);

  var drumHeight = map(drum, 0, 100, 0, 160);
  var drumColour = map(drum, 0, 100, 0, 80);
  var drumHeartC = map(drum, 0, 100, 80, 100);

  var bassHeight = map(bass, 0, 100, 0, 160);
  var bassColour = map(bass, 0, 100, 0, 100);
  var fishYbass = map(bass, 0, 100, -50, 50);

  var otherOpacity = map(other, 0, 100, 0, 30);
  var otherWidth = map(other, 0, 100, 0, 30);
  var otherStarSize = map(other, 0, 100, 0, 20);

  // moon and stars
  let moonX = 600;
  let moonY = 25;
  let moonSize = 50;
  let cresentSize = 40;

  let moonlightX = [600, 600 + moonSize, 850, 450];
  let moonlightY = [moonY + moonSize / 2, 720];
  noStroke();

  fill(0, 0, 10, 15);
  rect(
    canvasWidth / 2,
    canvasHeight / 2,
    400 + otherWidth,
    720,
    100,
    100,
    0,
    0
  );
  rect(
    canvasWidth / 2,
    canvasHeight / 2,
    500 + otherWidth,
    720,
    100,
    100,
    0,
    0
  );
  rect(
    canvasWidth / 2,
    canvasHeight / 2,
    600 + otherWidth,
    720,
    100,
    100,
    0,
    0
  );
  rect(
    canvasWidth / 2,
    canvasHeight / 2,
    700 + otherWidth,
    720,
    100,
    100,
    0,
    0
  );
  rect(
    canvasWidth / 2,
    canvasHeight / 2,
    800 + otherWidth,
    720,
    100,
    100,
    0,
    0
  );
  rect(
    canvasWidth / 2,
    canvasHeight / 2,
    900 + otherWidth,
    720,
    100,
    100,
    0,
    0
  );
  rect(
    canvasWidth / 2,
    canvasHeight / 2,
    1000 + otherWidth,
    720,
    100,
    100,
    0,
    0
  );
  rect(
    canvasWidth / 2,
    canvasHeight / 2,
    1100 + otherWidth,
    720,
    100,
    100,
    0,
    0
  );
  rect(
    canvasWidth / 2,
    canvasHeight / 2,
    1200 + otherWidth,
    720,
    100,
    100,
    0,
    0
  );

  //waves

  let waveX = [
    canvasWidth,
    canvasWidth / 2,
    canvasWidth / 3,
    canvasWidth / 6,
    0,
  ];
  let waveY = 450 - counter;
  fill(0, 0, 20, 150);
  strokeWeight(0);
  beginShape(); //top wave
  vertex(waveX[0], canvasHeight);
  vertex(waveX[0], canvasHeight);
  vertex(waveX[0] + 20, waveY + bassHeight - 50);
  curveVertex(1280 - waveX[3] + counter, waveY + drumHeight);
  curveVertex(1280 - waveX[2] + counter, waveY + bassHeight - 50);
  curveVertex(waveX[1] + counter, waveY + drumHeight);
  curveVertex(waveX[2] + counter, waveY + bassHeight - 50);
  curveVertex(waveX[3] + counter, waveY + drumHeight);
  vertex(waveX[4] - 20, waveY + bassHeight - 50);
  vertex(waveX[4], canvasHeight);
  vertex(waveX[4], canvasHeight);
  endShape();

  //moonlight
  fill(80, 80, 60, otherOpacity);
  beginShape();
  vertex(moonlightX[0], moonlightY[0]);
  vertex(moonlightX[1], moonlightY[0]);
  vertex(moonlightX[2] + counter, moonlightY[1]);
  vertex(moonlightX[3] + counter, moonlightY[1]);
  endShape(CLOSE);

  //moon
  ellipseMode(CORNER);
  fill(80, 80, 60); // pale yellow, moon
  ellipse(moonX, moonY, moonSize);
  fill(5, 15, 30); //same as background colour ,cresent cut out of moon
  ellipse(moonX, moonY, cresentSize);

  //stars
  let starX = [
    250 + vocalStarPos,
    350 + vocalStarPos,
    450 + vocalStarPos,
    750 - vocalStarPos,
    850 - vocalStarPos,
    950 - vocalStarPos,
  ];
  let starY = [50 - vocalStarPos, 100 - vocalStarPos, 150 - vocalStarPos];
  let starSize = [10, 10 + otherStarSize / 2, 10 + otherStarSize];
  ellipseMode(CENTER);
  fill(80, 80, 60); // pale yellow
  ellipse(starX[0], starY[0], starSize[0]);
  ellipse(starX[1], starY[2], starSize[0]);
  ellipse(starX[2], starY[1], starSize[0]);
  ellipse(starX[3], starY[1], starSize[0]);
  ellipse(starX[4], starY[2], starSize[0]);
  ellipse(starX[5], starY[0], starSize[0]);

  fill(80, 80, 60, 100); // pale yellow, opacity = 100
  ellipse(starX[0], starY[0], starSize[1]);
  ellipse(starX[1], starY[2], starSize[1]);
  ellipse(starX[2], starY[1], starSize[1]);
  ellipse(starX[3], starY[1], starSize[1]);
  ellipse(starX[4], starY[2], starSize[1]);
  ellipse(starX[5], starY[0], starSize[1]);

  fill(80, 80, 60, 50); // pale yellow, opacity = 50
  ellipse(starX[0], starY[0], starSize[2]);
  ellipse(starX[1], starY[2], starSize[2]);
  ellipse(starX[2], starY[1], starSize[2]);
  ellipse(starX[3], starY[1], starSize[2]);
  ellipse(starX[4], starY[2], starSize[2]);
  ellipse(starX[5], starY[0], starSize[2]);

  //moonlight on waves
  noFill();
  strokeWeight(5);
  stroke(80, 80, 100, otherOpacity);
  beginShape();
  curveVertex(1280 - waveX[3] + counter - 50, waveY + drumHeight + 20);
  curveVertex(1280 - waveX[2] + counter - 50, waveY + bassHeight - 50 + 20);
  curveVertex(waveX[1] + counter, waveY + drumHeight + 20);
  curveVertex(waveX[2] + counter + 50, waveY + bassHeight - 50 + 20);
  curveVertex(waveX[3] + counter + 50, waveY + drumHeight + 20);
  endShape();

  strokeWeight(2);
  beginShape();
  curveVertex(1280 - waveX[3] + counter - 50, waveY + drumHeight + 10);
  curveVertex(1280 - waveX[2] + counter - 50, waveY + bassHeight - 50 + 10);
  curveVertex(waveX[1] + counter, waveY + drumHeight + 10);
  curveVertex(waveX[2] + counter + 50, waveY + bassHeight - 50 + 10);
  curveVertex(waveX[3] + counter + 50, waveY + drumHeight + 10);
  endShape();

  //fish one

  let fishDot = 15;
  let fishXpos = counter * counter;
  if (fishXpos > 670) {
    fishXpos = 670;
  }

  let fishX = [
    fishXpos,
    fishXpos - fishDot / 2,
    fishXpos - (fishDot / 2) * 2,
    fishXpos - (fishDot / 2) * 3,
    fishXpos - (fishDot / 2) * 4,
    fishXpos - (fishDot / 2) * 5,
    fishXpos - (fishDot / 2) * 6,
    fishXpos - (fishDot / 2) * 7,
    fishXpos - (fishDot / 2) * 8,
    fishXpos - (fishDot / 2) * 9,
    fishXpos - (fishDot / 2) * 10,
    fishXpos - (fishDot / 2) * 11,
    fishXpos - (fishDot / 2) * 12,
    fishXpos - (fishDot / 2) * 13,
    fishXpos - (fishDot / 2) * 14,
    fishXpos - (fishDot / 2) * 15,
    fishXpos - (fishDot / 2) * 16,
    fishXpos - (fishDot / 2) * 17,
    fishXpos - (fishDot / 2) * 18,
  ];

  let fishY = [waveY + 210 + fishYbass, waveY + 210 - fishYbass];
  let altDotRow = fishDot / 2;

  strokeWeight(2);
  stroke(10, 10, drumColour);
  fill(80, 50, bassColour);

  ellipse(fishX[17], fishY[0] - altDotRow, fishDot); //18th row from  nose
  ellipse(fishX[17], fishY[0] + fishDot - altDotRow, fishDot);
  ellipse(fishX[17], fishY[0] - fishDot - altDotRow, fishDot);
  ellipse(fishX[17], fishY[0] + fishDot * 2 - altDotRow, fishDot);

  ellipse(fishX[16], fishY[0], fishDot); //17th row from  nose
  ellipse(fishX[16], fishY[0] + fishDot, fishDot);
  ellipse(fishX[16], fishY[0] - fishDot, fishDot);

  ellipse(fishX[15], fishY[0] - altDotRow, fishDot); //16th row from  nose - start of tail
  ellipse(fishX[15], fishY[0] + fishDot - altDotRow, fishDot);

  ellipse(fishX[14], fishY[0], fishDot); //15th row from  nose
  ellipse(fishX[14], fishY[0] + fishDot, fishDot);
  ellipse(fishX[14], fishY[0] - fishDot, fishDot);

  ellipse(fishX[13], fishY[0] - altDotRow, fishDot); //14th row from  nose
  ellipse(fishX[13], fishY[0] + fishDot - altDotRow, fishDot);
  ellipse(fishX[13], fishY[0] - fishDot - altDotRow, fishDot);
  ellipse(fishX[13], fishY[0] + fishDot * 2 - altDotRow, fishDot);

  ellipse(fishX[12], fishY[0], fishDot); //13th row from  nose
  ellipse(fishX[12], fishY[0] + fishDot, fishDot);
  ellipse(fishX[12], fishY[0] - fishDot, fishDot);
  ellipse(fishX[12], fishY[0] + fishDot * 2, fishDot);
  ellipse(fishX[12], fishY[0] - fishDot * 2, fishDot);

  ellipse(fishX[11], fishY[0] - altDotRow, fishDot); //12th row from  nose
  ellipse(fishX[11], fishY[0] + fishDot - altDotRow, fishDot);
  ellipse(fishX[11], fishY[0] - fishDot - altDotRow, fishDot);
  ellipse(fishX[11], fishY[0] + fishDot * 2 - altDotRow, fishDot);

  ellipse(fishX[10], fishY[0], fishDot); //11th row from  nose
  ellipse(fishX[10], fishY[0] + fishDot, fishDot);
  ellipse(fishX[10], fishY[0] - fishDot, fishDot);
  ellipse(fishX[10], fishY[0] + fishDot * 2, fishDot);
  ellipse(fishX[10], fishY[0] - fishDot * 2, fishDot);

  ellipse(fishX[9], fishY[0] - altDotRow, fishDot); //10th row from  nose
  fill(drumHeartC, 50, bassColour);
  ellipse(fishX[9], fishY[0] + fishDot - altDotRow, fishDot);
  fill(80, 50, bassColour);
  ellipse(fishX[9], fishY[0] - fishDot - altDotRow, fishDot);
  ellipse(fishX[9], fishY[0] + fishDot * 2 - altDotRow, fishDot);

  ellipse(fishX[8], fishY[0], fishDot); //9th row from  nose
  fill(drumHeartC, 50, bassColour);
  ellipse(fishX[8], fishY[0] + fishDot, fishDot);
  fill(80, 50, bassColour);
  ellipse(fishX[8], fishY[0] - fishDot, fishDot);
  ellipse(fishX[8], fishY[0] + fishDot * 2, fishDot);
  ellipse(fishX[8], fishY[0] - fishDot * 2, fishDot);

  ellipse(fishX[7], fishY[0] - altDotRow, fishDot); //8th row from  nose
  fill(drumHeartC, 50, bassColour);
  ellipse(fishX[7], fishY[0] + fishDot - altDotRow, fishDot);
  fill(80, 50, bassColour);
  ellipse(fishX[7], fishY[0] - fishDot - altDotRow, fishDot);
  ellipse(fishX[7], fishY[0] + fishDot * 2 - altDotRow, fishDot);

  ellipse(fishX[6], fishY[0], fishDot); //7th row from  nose
  ellipse(fishX[6], fishY[0] + fishDot, fishDot);
  ellipse(fishX[6], fishY[0] - fishDot, fishDot);
  ellipse(fishX[6], fishY[0] + fishDot * 2, fishDot);
  ellipse(fishX[6], fishY[0] - fishDot * 2, fishDot);

  strokeWeight(0);

  ellipse(fishX[5], fishY[0] - altDotRow, fishDot); //6th row from  nose
  ellipse(fishX[5], fishY[0] + fishDot - altDotRow, fishDot);
  ellipse(fishX[5], fishY[0] - fishDot - altDotRow, fishDot);
  ellipse(fishX[5], fishY[0] + fishDot * 2 - altDotRow, fishDot);

  ellipse(fishX[4], fishY[0], fishDot); //5th row from nose
  ellipse(fishX[4], fishY[0] + fishDot, fishDot);
  ellipse(fishX[4], fishY[0] - fishDot, fishDot);
  ellipse(fishX[4], fishY[0] + fishDot * 2, fishDot);
  ellipse(fishX[4], fishY[0] - fishDot * 2, fishDot);

  ellipse(fishX[3], fishY[0] - altDotRow, fishDot); //4th row from nose
  ellipse(fishX[3], fishY[0] + fishDot - altDotRow, fishDot);
  ellipse(fishX[3], fishY[0] - fishDot - altDotRow, fishDot);
  ellipse(fishX[3], fishY[0] + fishDot * 2 - altDotRow, fishDot);

  ellipse(fishX[2], fishY[0], fishDot); // third row
  ellipse(fishX[2], fishY[0] + fishDot, fishDot);
  ellipse(fishX[2], fishY[0] - fishDot, fishDot);

  ellipse(fishX[1], fishY[0] - altDotRow, fishDot); // second row
  ellipse(fishX[1], fishY[0] + fishDot - altDotRow, fishDot);

  ellipse(fishX[0], fishY[0], fishDot); //nose of fish

  fill(100);
  strokeWeight(2);
  ellipseMode(CENTER);
  ellipse(fishX[3], fishY[0], fishDot); //eye
  fill(0);
  ellipse(fishX[3], fishY[0], fishDot / 2); //pupil

  // fish 2

  let fish2Xpos = fishXpos + 200;

  let fish2X = [
    fish2Xpos,
    fish2Xpos - fishDot / 2,
    fish2Xpos - (fishDot / 2) * 2,
    fish2Xpos - (fishDot / 2) * 3,
    fish2Xpos - (fishDot / 2) * 4,
    fish2Xpos - (fishDot / 2) * 5,
    fish2Xpos - (fishDot / 2) * 6,
    fish2Xpos - (fishDot / 2) * 7,
    fish2Xpos - (fishDot / 2) * 8,
    fish2Xpos - (fishDot / 2) * 9,
    fish2Xpos - (fishDot / 2) * 10,
    fish2Xpos - (fishDot / 2) * 11,
    fish2Xpos - (fishDot / 2) * 12,
    fish2Xpos - (fishDot / 2) * 13,
    fish2Xpos - (fishDot / 2) * 14,
    fish2Xpos - (fishDot / 2) * 15,
    fish2Xpos - (fishDot / 2) * 16,
    fish2Xpos - (fishDot / 2) * 17,
    fish2Xpos - (fishDot / 2) * 18,
  ];

  stroke(10, 10, drumColour);
  fill(80, 50, bassColour);

  ellipse(fish2X[17], fishY[1] - altDotRow, fishDot); //18th row from  nose
  ellipse(fish2X[17], fishY[1] + fishDot - altDotRow, fishDot);
  ellipse(fish2X[17], fishY[1] - fishDot - altDotRow, fishDot);
  ellipse(fish2X[17], fishY[1] + fishDot * 2 - altDotRow, fishDot);

  ellipse(fish2X[16], fishY[1], fishDot); //17th row from  nose
  ellipse(fish2X[16], fishY[1] + fishDot, fishDot);
  ellipse(fish2X[16], fishY[1] - fishDot, fishDot);

  ellipse(fish2X[15], fishY[1] - altDotRow, fishDot); //16th row from  nose - start of tail
  ellipse(fish2X[15], fishY[1] + fishDot - altDotRow, fishDot);

  ellipse(fish2X[14], fishY[1], fishDot); //15th row from  nose
  ellipse(fish2X[14], fishY[1] + fishDot, fishDot);
  ellipse(fish2X[14], fishY[1] - fishDot, fishDot);

  ellipse(fish2X[13], fishY[1] - altDotRow, fishDot); //14th row from  nose
  ellipse(fish2X[13], fishY[1] + fishDot - altDotRow, fishDot);
  ellipse(fish2X[13], fishY[1] - fishDot - altDotRow, fishDot);
  ellipse(fish2X[13], fishY[1] + fishDot * 2 - altDotRow, fishDot);

  ellipse(fish2X[12], fishY[1], fishDot); //13th row from  nose
  ellipse(fish2X[12], fishY[1] + fishDot, fishDot);
  ellipse(fish2X[12], fishY[1] - fishDot, fishDot);
  ellipse(fish2X[12], fishY[1] + fishDot * 2, fishDot);
  ellipse(fish2X[12], fishY[1] - fishDot * 2, fishDot);

  ellipse(fish2X[11], fishY[1] - altDotRow, fishDot); //12th row from  nose
  ellipse(fish2X[11], fishY[1] + fishDot - altDotRow, fishDot);
  ellipse(fish2X[11], fishY[1] - fishDot - altDotRow, fishDot);
  ellipse(fish2X[11], fishY[1] + fishDot * 2 - altDotRow, fishDot);

  ellipse(fish2X[10], fishY[1], fishDot); //11th row from  nose
  ellipse(fish2X[10], fishY[1] + fishDot, fishDot);
  ellipse(fish2X[10], fishY[1] - fishDot, fishDot);
  ellipse(fish2X[10], fishY[1] + fishDot * 2, fishDot);
  ellipse(fish2X[10], fishY[1] - fishDot * 2, fishDot);

  ellipse(fish2X[9], fishY[1] - altDotRow, fishDot); //10th row from  nose
  ellipse(fish2X[9], fishY[1] + fishDot - altDotRow, fishDot);
  ellipse(fish2X[9], fishY[1] - fishDot - altDotRow, fishDot);
  ellipse(fish2X[9], fishY[1] + fishDot * 2 - altDotRow, fishDot);

  ellipse(fish2X[8], fishY[1], fishDot); //9th row from  nose
  ellipse(fish2X[8], fishY[1] + fishDot, fishDot);
  ellipse(fish2X[8], fishY[1] - fishDot, fishDot);
  ellipse(fish2X[8], fishY[1] + fishDot * 2, fishDot);
  ellipse(fish2X[8], fishY[1] - fishDot * 2, fishDot);

  ellipse(fish2X[7], fishY[1] - altDotRow, fishDot); //8th row from  nose
  ellipse(fish2X[7], fishY[1] + fishDot - altDotRow, fishDot);
  ellipse(fish2X[7], fishY[1] - fishDot - altDotRow, fishDot);
  ellipse(fish2X[7], fishY[1] + fishDot * 2 - altDotRow, fishDot);

  ellipse(fish2X[6], fishY[1], fishDot); //7th row from  nose
  ellipse(fish2X[6], fishY[1] + fishDot, fishDot);
  ellipse(fish2X[6], fishY[1] - fishDot, fishDot);
  ellipse(fish2X[6], fishY[1] + fishDot * 2, fishDot);
  ellipse(fish2X[6], fishY[1] - fishDot * 2, fishDot);

  strokeWeight(0); // head of fish

  ellipse(fish2X[5], fishY[1] - altDotRow, fishDot); //6th row from  nose
  ellipse(fish2X[5], fishY[1] + fishDot - altDotRow, fishDot);
  ellipse(fish2X[5], fishY[1] - fishDot - altDotRow, fishDot);
  ellipse(fish2X[5], fishY[1] + fishDot * 2 - altDotRow, fishDot);

  ellipse(fish2X[4], fishY[1], fishDot); //5th row from nose
  ellipse(fish2X[4], fishY[1] + fishDot, fishDot);
  ellipse(fish2X[4], fishY[1] - fishDot, fishDot);
  ellipse(fish2X[4], fishY[1] + fishDot * 2, fishDot);
  ellipse(fish2X[4], fishY[1] - fishDot * 2, fishDot);

  ellipse(fish2X[3], fishY[1] - altDotRow, fishDot); //4th row from nose
  ellipse(fish2X[3], fishY[1] + fishDot - altDotRow, fishDot);
  ellipse(fish2X[3], fishY[1] - fishDot - altDotRow, fishDot);
  ellipse(fish2X[3], fishY[1] + fishDot * 2 - altDotRow, fishDot);

  ellipse(fish2X[2], fishY[1], fishDot); // third row
  ellipse(fish2X[2], fishY[1] + fishDot, fishDot);
  ellipse(fish2X[2], fishY[1] - fishDot, fishDot);

  ellipse(fish2X[1], fishY[1] - altDotRow, fishDot); // second row
  ellipse(fish2X[1], fishY[1] + fishDot - altDotRow, fishDot);

  ellipse(fish2X[0], fishY[1], fishDot); //nose of fish

  fill(100);
  strokeWeight(2);
  ellipseMode(CENTER);
  ellipse(fish2X[3], fishY[1], fishDot); //eye
  fill(0);
  ellipse(fish2X[3], fishY[1], fishDot / 2); //pupil

  // foliage

  let flowerX = [100, 300, 980, 1180];
  let flowerY = [100, 250];
  let flowerSize = vocalSize;

  strokeWeight(2);
  stroke(80, 80, 60);
  noFill();
  beginShape();

  curveVertex(flowerX[0], flowerY[0]);
  curveVertex(flowerX[0], flowerY[0]);
  curveVertex(flowerX[0] + 25, flowerY[0] + 100);
  curveVertex(flowerX[0] - 25, flowerY[0] + 200);
  curveVertex(flowerX[0] + 25, flowerY[0] + 300);
  curveVertex(flowerX[0] - 25, flowerY[0] + 400);
  curveVertex(flowerX[0] + 25, flowerY[0] + 500);
  curveVertex(flowerX[0] - 25, flowerY[0] + 600);
  curveVertex(flowerX[0] + 25, flowerY[0] + 700);
  curveVertex(flowerX[0] - 25, flowerY[0] + 800);
  endShape();

  beginShape();
  curveVertex(flowerX[1], flowerY[1]);
  curveVertex(flowerX[1], flowerY[1]);
  curveVertex(flowerX[1] + 25, flowerY[1] + 100);
  curveVertex(flowerX[1] - 25, flowerY[1] + 200);
  curveVertex(flowerX[1] + 25, flowerY[1] + 300);
  curveVertex(flowerX[1] - 25, flowerY[1] + 400);
  curveVertex(flowerX[1] + 25, flowerY[1] + 500);
  curveVertex(flowerX[1] - 25, flowerY[1] + 600);
  curveVertex(flowerX[1] + 25, flowerY[1] + 700);
  curveVertex(flowerX[1] - 25, flowerY[1] + 800);
  endShape();

  beginShape();
  curveVertex(flowerX[2], flowerY[1]);
  curveVertex(flowerX[2], flowerY[1]);
  curveVertex(flowerX[2] + 25, flowerY[1] + 100);
  curveVertex(flowerX[2] - 25, flowerY[1] + 200);
  curveVertex(flowerX[2] + 25, flowerY[1] + 300);
  curveVertex(flowerX[2] - 25, flowerY[1] + 400);
  curveVertex(flowerX[2] + 25, flowerY[1] + 500);
  curveVertex(flowerX[2] - 25, flowerY[1] + 600);
  curveVertex(flowerX[2] + 25, flowerY[1] + 700);
  curveVertex(flowerX[2] - 25, flowerY[1] + 800);
  endShape();

  beginShape();
  curveVertex(flowerX[3], flowerY[0]);
  curveVertex(flowerX[3], flowerY[0]);
  curveVertex(flowerX[3] + 25, flowerY[0] + 100);
  curveVertex(flowerX[3] - 25, flowerY[0] + 200);
  curveVertex(flowerX[3] + 25, flowerY[0] + 300);
  curveVertex(flowerX[3] - 25, flowerY[0] + 400);
  curveVertex(flowerX[3] + 25, flowerY[0] + 500);
  curveVertex(flowerX[3] - 25, flowerY[0] + 600);
  curveVertex(flowerX[3] + 25, flowerY[0] + 700);
  curveVertex(flowerX[3] - 25, flowerY[0] + 800);
  endShape();

  strokeWeight(2);
  stroke(80, 80, 60);
  fill(80, 80, 60);
  ellipse(flowerX[0], flowerY[0], flowerSize);
  ellipse(flowerX[1], flowerY[1], flowerSize);
  ellipse(flowerX[2], flowerY[1], flowerSize);
  ellipse(flowerX[3], flowerY[0], flowerSize);

  fill(100, 50);
  ellipse(flowerX[0] + 25, flowerY[0] + 25, flowerSize);
  ellipse(flowerX[0] + 25, flowerY[0] - 25, flowerSize);
  ellipse(flowerX[0] - 25, flowerY[0] - 25, flowerSize);
  ellipse(flowerX[0] - 25, flowerY[0] + 25, flowerSize);

  ellipse(flowerX[1] + 25, flowerY[1] + 25, flowerSize);
  ellipse(flowerX[1] + 25, flowerY[1] - 25, flowerSize);
  ellipse(flowerX[1] - 25, flowerY[1] - 25, flowerSize);
  ellipse(flowerX[1] - 25, flowerY[1] + 25, flowerSize);

  ellipse(flowerX[2] + 25, flowerY[1] + 25, flowerSize);
  ellipse(flowerX[2] + 25, flowerY[1] - 25, flowerSize);
  ellipse(flowerX[2] - 25, flowerY[1] - 25, flowerSize);
  ellipse(flowerX[2] - 25, flowerY[1] + 25, flowerSize);

  ellipse(flowerX[3] + 25, flowerY[0] + 25, flowerSize);
  ellipse(flowerX[3] + 25, flowerY[0] - 25, flowerSize);
  ellipse(flowerX[3] - 25, flowerY[0] - 25, flowerSize);
  ellipse(flowerX[3] - 25, flowerY[0] + 25, flowerSize);
}
