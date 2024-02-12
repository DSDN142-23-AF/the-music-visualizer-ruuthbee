// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(10, 25, 30); //stoney blue
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER);
  ellipseMode(CENTER);
  colorMode(RGB, 100, 100, 100);
  textSize(24);

  let bar_spacing = height / 10;
  let bar_height = width / 12;
  let bar_pos_x = width / 2;

  var ballSize = 10;
  var otherOpacity = map(other, 0, 100, 0, 30);

  //fill(255, 120);

  var drumHeight = map(drum, 0, 100, height / 2, height - 200);
  //fill(255, 120);
  //ellipse(200, drumHeight, ballSize);

  var bassHeight = map(bass, 0, 100, height / 2, height - 200);
  //fill(255, 120);
  // ellipse(300, bassHeight, ballSize);

  var vocalHeight = map(vocal, 0, 100, height / 2, height);
  //fill(255, 120);
  //ellipse(400, vocalHeight, ballSize);

  // moon and stars
  let moonX = 600;
  let moonY = 25;
  let moonSize = 50;
  let cresentSize = 40;

  let moonlightX = [600, 600 + moonSize, 850, 450];
  let moonlightY = [moonY + moonSize / 2, 720];
  noStroke();

  //moonlight
  fill(80, 80, 60, otherOpacity);
  beginShape();
  vertex(moonlightX[0], moonlightY[0]);
  vertex(moonlightX[1], moonlightY[0]);
  vertex(moonlightX[2], moonlightY[1]);
  vertex(moonlightX[3], moonlightY[1]);
  endShape(CLOSE);

  ellipseMode(CORNER);
  fill(80, 80, 60); // pale yellow, moon
  ellipse(moonX, moonY, moonSize);
  fill(10, 25, 30); //same as background colour ,cresent cut out of moon
  ellipse(moonX, moonY, cresentSize);

  fill(0, 100);
  strokeWeight(0);
  beginShape(); //top wave
  vertex(1280, 720);
  vertex(1280, 720);
  vertex(1280 + 20, bassHeight - 50);
  curveVertex(1280 - 1280 / 6 + counter, drumHeight);
  curveVertex(1280 - 1280 / 3 + counter, bassHeight - 50);
  curveVertex(1280 / 2 + counter, drumHeight);
  curveVertex(1280 / 3 + counter, bassHeight - 50);
  curveVertex(1280 / 6 + counter, drumHeight);
  vertex(0 - 20, bassHeight - 50);
  vertex(0, 720);
  vertex(0, 720);
  endShape();

  //flowers
  //let flowerX = 170;
  let flowerX = [100, 300, 980, 1180];
  let flowerY = [100, 250];
  let flowerSize = vocal;

  ellipseMode(CENTER);
  strokeWeight(2);
  stroke(40, 20, 35);
  fill(100, 50);
  ellipse(flowerX[0], flowerY[0], flowerSize);
  ellipse(flowerX[0] + 25, flowerY[0] + 25, flowerSize);
  ellipse(flowerX[0] + 25, flowerY[0] - 25, flowerSize);
  ellipse(flowerX[0] - 25, flowerY[0] - 25, flowerSize);
  ellipse(flowerX[0] - 25, flowerY[0] + 25, flowerSize);

  ellipse(flowerX[1], flowerY[1], flowerSize);
  ellipse(flowerX[1] + 25, flowerY[1] + 25, flowerSize);
  ellipse(flowerX[1] + 25, flowerY[1] - 25, flowerSize);
  ellipse(flowerX[1] - 25, flowerY[1] - 25, flowerSize);
  ellipse(flowerX[1] - 25, flowerY[1] + 25, flowerSize);

  ellipse(flowerX[2], flowerY[1], flowerSize);
  ellipse(flowerX[2] + 25, flowerY[1] + 25, flowerSize);
  ellipse(flowerX[2] + 25, flowerY[1] - 25, flowerSize);
  ellipse(flowerX[2] - 25, flowerY[1] - 25, flowerSize);
  ellipse(flowerX[2] - 25, flowerY[1] + 25, flowerSize);

  ellipse(flowerX[3], flowerY[0], flowerSize);
  ellipse(flowerX[3] + 25, flowerY[0] + 25, flowerSize);
  ellipse(flowerX[3] + 25, flowerY[0] - 25, flowerSize);
  ellipse(flowerX[3] - 25, flowerY[0] - 25, flowerSize);
  ellipse(flowerX[3] - 25, flowerY[0] + 25, flowerSize);

  //fish one

  let fishDot = 15;
  //let fishX = 600;
  //let fishX2 = fishX - fishDot / 2;
  //let fishX3 = fishX2 - fishDot / 2;
  //let fishX4 = fishX3 - fishDot / 2;
  //let fishX5 = fishX4 - fishDot / 2;
  //let fishX6 = fishX5 - fishDot / 2;
  //let fishX7 = fishX6 - fishDot / 2;
  //let fishX8 = fishX7 - fishDot / 2;
  //let fishX9 = fishX8 - fishDot / 2;
  //let fishX10 = fishX9 - fishDot / 2;
  //let fishX11 = fishX10 - fishDot / 2;
  //let fishX12 = fishX11 - fishDot / 2;
  //let fishX13 = fishX12 - fishDot / 2;
  //let fishX14 = fishX13 - fishDot / 2;
  //let fishX15 = fishX14 - fishDot / 2;
  //let fishX16 = fishX15 - fishDot / 2;
  //let fishX17 = fishX16 - fishDot / 2;
  //let fishX18 = fishX17 - fishDot / 2;
  let fishXpos = 600;

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

  let fishY = 600;
  let altDotRow = fishDot / 2;

  noStroke();
  stroke(10, 10, drum);
  fill(80, 50, bass);

  ellipse(fishX[17], fishY - altDotRow, fishDot); //18th row from  nose
  ellipse(fishX[17], fishY + fishDot - altDotRow, fishDot);
  ellipse(fishX[17], fishY - fishDot - altDotRow, fishDot);
  ellipse(fishX[17], fishY + fishDot * 2 - altDotRow, fishDot);

  ellipse(fishX[16], fishY, fishDot); //17th row from  nose
  ellipse(fishX[16], fishY + fishDot, fishDot);
  ellipse(fishX[16], fishY - fishDot, fishDot);

  ellipse(fishX[15], fishY - altDotRow, fishDot); //16th row from  nose - start of tail
  ellipse(fishX[15], fishY + fishDot - altDotRow, fishDot);

  ellipse(fishX[14], fishY, fishDot); //15th row from  nose
  ellipse(fishX[14], fishY + fishDot, fishDot);
  ellipse(fishX[14], fishY - fishDot, fishDot);

  ellipse(fishX[13], fishY - altDotRow, fishDot); //14th row from  nose
  ellipse(fishX[13], fishY + fishDot - altDotRow, fishDot);
  ellipse(fishX[13], fishY - fishDot - altDotRow, fishDot);
  ellipse(fishX[13], fishY + fishDot * 2 - altDotRow, fishDot);

  ellipse(fishX[12], fishY, fishDot); //13th row from  nose
  ellipse(fishX[12], fishY + fishDot, fishDot);
  ellipse(fishX[12], fishY - fishDot, fishDot);
  ellipse(fishX[12], fishY + fishDot * 2, fishDot);
  ellipse(fishX[12], fishY - fishDot * 2, fishDot);

  ellipse(fishX[11], fishY - altDotRow, fishDot); //12th row from  nose
  ellipse(fishX[11], fishY + fishDot - altDotRow, fishDot);
  ellipse(fishX[11], fishY - fishDot - altDotRow, fishDot);
  ellipse(fishX[11], fishY + fishDot * 2 - altDotRow, fishDot);

  ellipse(fishX[10], fishY, fishDot); //11th row from  nose
  ellipse(fishX[10], fishY + fishDot, fishDot);
  ellipse(fishX[10], fishY - fishDot, fishDot);
  ellipse(fishX[10], fishY + fishDot * 2, fishDot);
  ellipse(fishX[10], fishY - fishDot * 2, fishDot);

  ellipse(fishX[9], fishY - altDotRow, fishDot); //10th row from  nose
  ellipse(fishX[9], fishY + fishDot - altDotRow, fishDot);
  ellipse(fishX[9], fishY - fishDot - altDotRow, fishDot);
  ellipse(fishX[9], fishY + fishDot * 2 - altDotRow, fishDot);

  ellipse(fishX[8], fishY, fishDot); //9th row from  nose
  ellipse(fishX[8], fishY + fishDot, fishDot);
  ellipse(fishX[8], fishY - fishDot, fishDot);
  ellipse(fishX[8], fishY + fishDot * 2, fishDot);
  ellipse(fishX[8], fishY - fishDot * 2, fishDot);

  ellipse(fishX[7], fishY - altDotRow, fishDot); //8th row from  nose
  ellipse(fishX[7], fishY + fishDot - altDotRow, fishDot);
  ellipse(fishX[7], fishY - fishDot - altDotRow, fishDot);
  ellipse(fishX[7], fishY + fishDot * 2 - altDotRow, fishDot);

  ellipse(fishX[6], fishY, fishDot); //7th row from  nose
  ellipse(fishX[6], fishY + fishDot, fishDot);
  ellipse(fishX[6], fishY - fishDot, fishDot);
  ellipse(fishX[6], fishY + fishDot * 2, fishDot);
  ellipse(fishX[6], fishY - fishDot * 2, fishDot);
  //ellipse(fishX7, fishY + fishDot * 3, fishDot);
  //ellipse(fishX7, fishY - fishDot * 3, fishDot);

  strokeWeight(0);

  ellipse(fishX[5], fishY - altDotRow, fishDot); //6th row from  nose
  ellipse(fishX[5], fishY + fishDot - altDotRow, fishDot);
  ellipse(fishX[5], fishY - fishDot - altDotRow, fishDot);
  ellipse(fishX[5], fishY + fishDot * 2 - altDotRow, fishDot);
  //ellipse(fishX6, fishY - fishDot * 2 - altDotRow, fishDot);
  //ellipse(fishX6, fishY + fishDot * 3 - altDotRow, fishDot);

  ellipse(fishX[4], fishY, fishDot); //5th row from nose
  ellipse(fishX[4], fishY + fishDot, fishDot);
  ellipse(fishX[4], fishY - fishDot, fishDot);
  ellipse(fishX[4], fishY + fishDot * 2, fishDot);
  ellipse(fishX[4], fishY - fishDot * 2, fishDot);

  ellipse(fishX[3], fishY - altDotRow, fishDot); //4th row from nose
  ellipse(fishX[3], fishY + fishDot - altDotRow, fishDot);
  ellipse(fishX[3], fishY - fishDot - altDotRow, fishDot);
  ellipse(fishX[3], fishY + fishDot * 2 - altDotRow, fishDot);

  ellipse(fishX[2], fishY, fishDot); // third row
  ellipse(fishX[2], fishY + fishDot, fishDot);
  ellipse(fishX[2], fishY - fishDot, fishDot);

  ellipse(fishX[1], fishY - altDotRow, fishDot); // second row
  ellipse(fishX[1], fishY + fishDot - altDotRow, fishDot);

  ellipse(fishX[0], fishY, fishDot); //nose of fish

  fill(100);
  strokeWeight(2);
  ellipseMode(CENTER);
  ellipse(fishX[3], fishY, fishDot); //eye
  fill(0);
  ellipse(fishX[3], fishY, fishDot / 2); //pupil

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

  noStroke();
  stroke(10, 10, drum);
  fill(80, 50, bass);

  ellipse(fish2X[17], fishY - altDotRow, fishDot); //18th row from  nose
  ellipse(fish2X[17], fishY + fishDot - altDotRow, fishDot);
  ellipse(fish2X[17], fishY - fishDot - altDotRow, fishDot);
  ellipse(fish2X[17], fishY + fishDot * 2 - altDotRow, fishDot);

  ellipse(fish2X[16], fishY, fishDot); //17th row from  nose
  ellipse(fish2X[16], fishY + fishDot, fishDot);
  ellipse(fish2X[16], fishY - fishDot, fishDot);

  ellipse(fish2X[15], fishY - altDotRow, fishDot); //16th row from  nose - start of tail
  ellipse(fish2X[15], fishY + fishDot - altDotRow, fishDot);

  ellipse(fish2X[14], fishY, fishDot); //15th row from  nose
  ellipse(fish2X[14], fishY + fishDot, fishDot);
  ellipse(fish2X[14], fishY - fishDot, fishDot);

  ellipse(fish2X[13], fishY - altDotRow, fishDot); //14th row from  nose
  ellipse(fish2X[13], fishY + fishDot - altDotRow, fishDot);
  ellipse(fish2X[13], fishY - fishDot - altDotRow, fishDot);
  ellipse(fish2X[13], fishY + fishDot * 2 - altDotRow, fishDot);

  ellipse(fish2X[12], fishY, fishDot); //13th row from  nose
  ellipse(fish2X[12], fishY + fishDot, fishDot);
  ellipse(fish2X[12], fishY - fishDot, fishDot);
  ellipse(fish2X[12], fishY + fishDot * 2, fishDot);
  ellipse(fish2X[12], fishY - fishDot * 2, fishDot);

  ellipse(fish2X[11], fishY - altDotRow, fishDot); //12th row from  nose
  ellipse(fish2X[11], fishY + fishDot - altDotRow, fishDot);
  ellipse(fish2X[11], fishY - fishDot - altDotRow, fishDot);
  ellipse(fish2X[11], fishY + fishDot * 2 - altDotRow, fishDot);

  ellipse(fish2X[10], fishY, fishDot); //11th row from  nose
  ellipse(fish2X[10], fishY + fishDot, fishDot);
  ellipse(fish2X[10], fishY - fishDot, fishDot);
  ellipse(fish2X[10], fishY + fishDot * 2, fishDot);
  ellipse(fish2X[10], fishY - fishDot * 2, fishDot);

  ellipse(fish2X[9], fishY - altDotRow, fishDot); //10th row from  nose
  ellipse(fish2X[9], fishY + fishDot - altDotRow, fishDot);
  ellipse(fish2X[9], fishY - fishDot - altDotRow, fishDot);
  ellipse(fish2X[9], fishY + fishDot * 2 - altDotRow, fishDot);

  ellipse(fish2X[8], fishY, fishDot); //9th row from  nose
  ellipse(fish2X[8], fishY + fishDot, fishDot);
  ellipse(fish2X[8], fishY - fishDot, fishDot);
  ellipse(fish2X[8], fishY + fishDot * 2, fishDot);
  ellipse(fish2X[8], fishY - fishDot * 2, fishDot);

  ellipse(fish2X[7], fishY - altDotRow, fishDot); //8th row from  nose
  ellipse(fish2X[7], fishY + fishDot - altDotRow, fishDot);
  ellipse(fish2X[7], fishY - fishDot - altDotRow, fishDot);
  ellipse(fish2X[7], fishY + fishDot * 2 - altDotRow, fishDot);

  ellipse(fish2X[6], fishY, fishDot); //7th row from  nose
  ellipse(fish2X[6], fishY + fishDot, fishDot);
  ellipse(fish2X[6], fishY - fishDot, fishDot);
  ellipse(fish2X[6], fishY + fishDot * 2, fishDot);
  ellipse(fish2X[6], fishY - fishDot * 2, fishDot);
  //ellipse(fishX7, fishY + fishDot * 3, fishDot);
  //ellipse(fishX7, fishY - fishDot * 3, fishDot);

  strokeWeight(0);

  ellipse(fish2X[5], fishY - altDotRow, fishDot); //6th row from  nose
  ellipse(fish2X[5], fishY + fishDot - altDotRow, fishDot);
  ellipse(fish2X[5], fishY - fishDot - altDotRow, fishDot);
  ellipse(fish2X[5], fishY + fishDot * 2 - altDotRow, fishDot);
  //ellipse(fishX6, fishY - fishDot * 2 - altDotRow, fishDot);
  //ellipse(fishX6, fishY + fishDot * 3 - altDotRow, fishDot);

  ellipse(fish2X[4], fishY, fishDot); //5th row from nose
  ellipse(fish2X[4], fishY + fishDot, fishDot);
  ellipse(fish2X[4], fishY - fishDot, fishDot);
  ellipse(fish2X[4], fishY + fishDot * 2, fishDot);
  ellipse(fish2X[4], fishY - fishDot * 2, fishDot);

  ellipse(fish2X[3], fishY - altDotRow, fishDot); //4th row from nose
  ellipse(fish2X[3], fishY + fishDot - altDotRow, fishDot);
  ellipse(fish2X[3], fishY - fishDot - altDotRow, fishDot);
  ellipse(fish2X[3], fishY + fishDot * 2 - altDotRow, fishDot);

  ellipse(fish2X[2], fishY, fishDot); // third row
  ellipse(fish2X[2], fishY + fishDot, fishDot);
  ellipse(fish2X[2], fishY - fishDot, fishDot);

  ellipse(fish2X[1], fishY - altDotRow, fishDot); // second row
  ellipse(fish2X[1], fishY + fishDot - altDotRow, fishDot);

  ellipse(fish2X[0], fishY, fishDot); //nose of fish

  fill(100);
  strokeWeight(2);
  ellipseMode(CENTER);
  ellipse(fish2X[3], fishY, fishDot); //eye
  fill(0);
  ellipse(fish2X[3], fishY, fishDot / 2); //pupil

  // foliage

  // vocal bar is red
  //fill(200, 0, 0);
  //rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
  //fill(0);
  //text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);

  // drum bar is green
  //fill(0, 200, 0);
  //rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
  //fill(0);
  //text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);

  // bass bar is blue
  //fill(50, 50, 240);
  //rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
  //fill(0);
  //text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);

  // other bar is white
  //fill(200, 200, 200);
  //rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
  //fill(0);
  //text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
  //fill(255, 255, 0);

  // display "words"
  //textAlign(CENTER);
  //textSize(vocal);
  //text(words, width/2, height/3);
}
