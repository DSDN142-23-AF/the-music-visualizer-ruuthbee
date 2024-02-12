// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(65, 90, 119); //stoney blue
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER);
  textSize(24);

  let bar_spacing = height / 10;
  let bar_height = width / 12;
  let bar_pos_x = width / 2;

  var ballSize = 10 * counter;
  var otherHeight = map(other, 0, 100, height / 2, height);

  //fill(255, 120);
  //ellipse(100, otherHeight, ballSize);

  var drumHeight = map(drum, 0, 100, height / 2, height - 200);
  //fill(255, 120);
  //ellipse(200, drumHeight, ballSize);

  var bassHeight = map(bass, 0, 100, height / 2, height - 200);
  //fill(255, 120);
  // ellipse(300, bassHeight, ballSize);

  var vocalHeight = map(vocal, 0, 100, height / 2, height);
  //fill(255, 120);
  //ellipse(400, vocalHeight, ballSize);

  fill(0, 80);
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

  //fill(255, 255, 153); //yellow
  //ellipse(1280 - 1280 / 6 + counter, drumHeight, 50);
  //ellipse(1280 - 1280 / 3 + counter, bassHeight - 50, 50);
  // fill(255, 0, 0); //red
  // ellipse(1280 / 2 + counter, drumHeight, 50);
  // fill(34, 139, 34); //green
  //ellipse(1280 / 3 + counter, bassHeight - 50, 50);
  //fill(128, 0, 128); // purple
  //ellipse(1280 / 6 + counter, drumHeight, 50);

  //flower
  let flowerX = 170;
  let flowerY = 100;
  var flowerSize = 10 + counter;
  noFill();
  strokeWeight(2);
  ellipse(flowerX, flowerY, flowerSize);
  ellipse(flowerX + 25, flowerY + 25, flowerSize);
  ellipse(flowerX + 25, flowerY - 25, flowerSize);
  ellipse(flowerX - 25, flowerY - 25, flowerSize);
  ellipse(flowerX - 25, flowerY + 25, flowerSize);

  //fish one

  let fishDot = 15;
  let fishX = 600;
  let fishX2 = fishX - fishDot / 2;
  let fishX3 = fishX2 - fishDot / 2;
  let fishX4 = fishX3 - fishDot / 2;
  let fishX5 = fishX4 - fishDot / 2;
  let fishX6 = fishX5 - fishDot / 2;
  let fishX7 = fishX6 - fishDot / 2;
  let fishX8 = fishX7 - fishDot / 2;
  let fishX9 = fishX8 - fishDot / 2;
  let fishX10 = fishX9 - fishDot / 2;
  let fishX11 = fishX10 - fishDot / 2;
  let fishX12 = fishX11 - fishDot / 2;
  let fishX13 = fishX12 - fishDot / 2;
  let fishX14 = fishX13 - fishDot / 2;
  let fishX15 = fishX14 - fishDot / 2;
  let fishX16 = fishX15 - fishDot / 2;
  let fishX17 = fishX16 - fishDot / 2;
  let fishX18 = fishX17 - fishDot / 2;

  let fishY = 600;
  let altDotRow = fishDot / 2;
  fill(255);

  strokeWeight(1);

  ellipse(fishX18, fishY - altDotRow, fishDot); //18th row from  nose
  ellipse(fishX18, fishY + fishDot - altDotRow, fishDot);
  ellipse(fishX18, fishY - fishDot - altDotRow, fishDot);
  ellipse(fishX18, fishY + fishDot * 2 - altDotRow, fishDot);

  ellipse(fishX17, fishY, fishDot); //17th row from  nose
  ellipse(fishX17, fishY + fishDot, fishDot);
  ellipse(fishX17, fishY - fishDot, fishDot);

  ellipse(fishX16, fishY - altDotRow, fishDot); //16th row from  nose - start of tail
  ellipse(fishX16, fishY + fishDot - altDotRow, fishDot);

  ellipse(fishX15, fishY, fishDot); //15th row from  nose
  ellipse(fishX15, fishY + fishDot, fishDot);
  ellipse(fishX15, fishY - fishDot, fishDot);

  ellipse(fishX14, fishY - altDotRow, fishDot); //14th row from  nose
  ellipse(fishX14, fishY + fishDot - altDotRow, fishDot);
  ellipse(fishX14, fishY - fishDot - altDotRow, fishDot);
  ellipse(fishX14, fishY + fishDot * 2 - altDotRow, fishDot);

  ellipse(fishX13, fishY, fishDot); //13th row from  nose
  ellipse(fishX13, fishY + fishDot, fishDot);
  ellipse(fishX13, fishY - fishDot, fishDot);
  ellipse(fishX13, fishY + fishDot * 2, fishDot);
  ellipse(fishX13, fishY - fishDot * 2, fishDot);

  ellipse(fishX12, fishY - altDotRow, fishDot); //12th row from  nose
  ellipse(fishX12, fishY + fishDot - altDotRow, fishDot);
  ellipse(fishX12, fishY - fishDot - altDotRow, fishDot);
  ellipse(fishX12, fishY + fishDot * 2 - altDotRow, fishDot);

  ellipse(fishX11, fishY, fishDot); //11th row from  nose
  ellipse(fishX11, fishY + fishDot, fishDot);
  ellipse(fishX11, fishY - fishDot, fishDot);
  ellipse(fishX11, fishY + fishDot * 2, fishDot);
  ellipse(fishX11, fishY - fishDot * 2, fishDot);

  ellipse(fishX10, fishY - altDotRow, fishDot); //10th row from  nose
  ellipse(fishX10, fishY + fishDot - altDotRow, fishDot);
  ellipse(fishX10, fishY - fishDot - altDotRow, fishDot);
  ellipse(fishX10, fishY + fishDot * 2 - altDotRow, fishDot);

  ellipse(fishX9, fishY, fishDot); //9th row from  nose
  ellipse(fishX9, fishY + fishDot, fishDot);
  ellipse(fishX9, fishY - fishDot, fishDot);
  ellipse(fishX9, fishY + fishDot * 2, fishDot);
  ellipse(fishX9, fishY - fishDot * 2, fishDot);

  ellipse(fishX8, fishY - altDotRow, fishDot); //8th row from  nose
  ellipse(fishX8, fishY + fishDot - altDotRow, fishDot);
  ellipse(fishX8, fishY - fishDot - altDotRow, fishDot);
  ellipse(fishX8, fishY + fishDot * 2 - altDotRow, fishDot);

  ellipse(fishX7, fishY, fishDot); //7th row from  nose
  ellipse(fishX7, fishY + fishDot, fishDot);
  ellipse(fishX7, fishY - fishDot, fishDot);
  ellipse(fishX7, fishY + fishDot * 2, fishDot);
  ellipse(fishX7, fishY - fishDot * 2, fishDot);
  //ellipse(fishX7, fishY + fishDot * 3, fishDot);
  //ellipse(fishX7, fishY - fishDot * 3, fishDot);

  ellipse(fishX6, fishY - altDotRow, fishDot); //6th row from  nose
  ellipse(fishX6, fishY + fishDot - altDotRow, fishDot);
  ellipse(fishX6, fishY - fishDot - altDotRow, fishDot);
  ellipse(fishX6, fishY + fishDot * 2 - altDotRow, fishDot);
  //ellipse(fishX6, fishY - fishDot * 2 - altDotRow, fishDot);
  //ellipse(fishX6, fishY + fishDot * 3 - altDotRow, fishDot);

  ellipse(fishX5, fishY, fishDot); //5th row from nose
  ellipse(fishX5, fishY + fishDot, fishDot);
  ellipse(fishX5, fishY - fishDot, fishDot);
  ellipse(fishX5, fishY + fishDot * 2, fishDot);
  ellipse(fishX5, fishY - fishDot * 2, fishDot);

  ellipse(fishX4, fishY - altDotRow, fishDot); //4th row from nose
  ellipse(fishX4, fishY + fishDot - altDotRow, fishDot);
  ellipse(fishX4, fishY - fishDot - altDotRow, fishDot);
  ellipse(fishX4, fishY + fishDot * 2 - altDotRow, fishDot);

  ellipse(fishX3, fishY, fishDot); // third row
  ellipse(fishX3, fishY + fishDot, fishDot);
  ellipse(fishX3, fishY - fishDot, fishDot);

  ellipse(fishX2, fishY - altDotRow, fishDot); // second row
  ellipse(fishX2, fishY + fishDot - altDotRow, fishDot);

  ellipse(fishX, fishY, fishDot); //nose of fish

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

function fish1(words, vocal, drum, bass, other, counter) {
  let fishDot = 15 + words;
  let fishX = 300;
  let fishX2 = fishX - fishDot / 2;
  let fishX3 = fishX2 - fishDot / 2;
  let fishX4 = fishX3 - fishDot / 2;
  let fishX5 = fishX4 - fishDot / 2;
  let fishX6 = fishX5 - fishDot / 2;
  let fishX7 = fishX6 - fishDot / 2;
  let fishX8 = fishX7 - fishDot / 2;
  let fishX9 = fishX8 - fishDot / 2;
  let fishX10 = fishX9 - fishDot / 2;
  let fishX11 = fishX10 - fishDot / 2;
  let fishX12 = fishX11 - fishDot / 2;
  let fishX13 = fishX12 - fishDot / 2;
  let fishX14 = fishX13 - fishDot / 2;
  let fishX15 = fishX14 - fishDot / 2;
  let fishX16 = fishX15 - fishDot / 2;
  let fishX17 = fishX16 - fishDot / 2;
  let fishX18 = fishX17 - fishDot / 2;

  let fishY = 600;
  let altDotRow = fishDot / 2;
  fill(255);

  strokeWeight(1);

  ellipse(fishX18, fishY - altDotRow, fishDot); //18th row from  nose
  ellipse(fishX18, fishY + fishDot - altDotRow, fishDot);
  ellipse(fishX18, fishY - fishDot - altDotRow, fishDot);
  ellipse(fishX18, fishY + fishDot * 2 - altDotRow, fishDot);

  ellipse(fishX17, fishY, fishDot); //17th row from  nose
  ellipse(fishX17, fishY + fishDot, fishDot);
  ellipse(fishX17, fishY - fishDot, fishDot);

  ellipse(fishX16, fishY - altDotRow, fishDot); //16th row from  nose - start of tail
  ellipse(fishX16, fishY + fishDot - altDotRow, fishDot);

  ellipse(fishX15, fishY, fishDot); //15th row from  nose
  ellipse(fishX15, fishY + fishDot, fishDot);
  ellipse(fishX15, fishY - fishDot, fishDot);

  ellipse(fishX14, fishY - altDotRow, fishDot); //14th row from  nose
  ellipse(fishX14, fishY + fishDot - altDotRow, fishDot);
  ellipse(fishX14, fishY - fishDot - altDotRow, fishDot);
  ellipse(fishX14, fishY + fishDot * 2 - altDotRow, fishDot);

  ellipse(fishX13, fishY, fishDot); //13th row from  nose
  ellipse(fishX13, fishY + fishDot, fishDot);
  ellipse(fishX13, fishY - fishDot, fishDot);
  ellipse(fishX13, fishY + fishDot * 2, fishDot);
  ellipse(fishX13, fishY - fishDot * 2, fishDot);

  ellipse(fishX12, fishY - altDotRow, fishDot); //12th row from  nose
  ellipse(fishX12, fishY + fishDot - altDotRow, fishDot);
  ellipse(fishX12, fishY - fishDot - altDotRow, fishDot);
  ellipse(fishX12, fishY + fishDot * 2 - altDotRow, fishDot);

  ellipse(fishX11, fishY, fishDot); //11th row from  nose
  ellipse(fishX11, fishY + fishDot, fishDot);
  ellipse(fishX11, fishY - fishDot, fishDot);
  ellipse(fishX11, fishY + fishDot * 2, fishDot);
  ellipse(fishX11, fishY - fishDot * 2, fishDot);

  ellipse(fishX10, fishY - altDotRow, fishDot); //10th row from  nose
  ellipse(fishX10, fishY + fishDot - altDotRow, fishDot);
  ellipse(fishX10, fishY - fishDot - altDotRow, fishDot);
  ellipse(fishX10, fishY + fishDot * 2 - altDotRow, fishDot);

  ellipse(fishX9, fishY, fishDot); //9th row from  nose
  ellipse(fishX9, fishY + fishDot, fishDot);
  ellipse(fishX9, fishY - fishDot, fishDot);
  ellipse(fishX9, fishY + fishDot * 2, fishDot);
  ellipse(fishX9, fishY - fishDot * 2, fishDot);

  ellipse(fishX8, fishY - altDotRow, fishDot); //8th row from  nose
  ellipse(fishX8, fishY + fishDot - altDotRow, fishDot);
  ellipse(fishX8, fishY - fishDot - altDotRow, fishDot);
  ellipse(fishX8, fishY + fishDot * 2 - altDotRow, fishDot);

  ellipse(fishX7, fishY, fishDot); //7th row from  nose
  ellipse(fishX7, fishY + fishDot, fishDot);
  ellipse(fishX7, fishY - fishDot, fishDot);
  ellipse(fishX7, fishY + fishDot * 2, fishDot);
  ellipse(fishX7, fishY - fishDot * 2, fishDot);
  //ellipse(fishX7, fishY + fishDot * 3, fishDot);
  //ellipse(fishX7, fishY - fishDot * 3, fishDot);

  ellipse(fishX6, fishY - altDotRow, fishDot); //6th row from  nose
  ellipse(fishX6, fishY + fishDot - altDotRow, fishDot);
  ellipse(fishX6, fishY - fishDot - altDotRow, fishDot);
  ellipse(fishX6, fishY + fishDot * 2 - altDotRow, fishDot);
  //ellipse(fishX6, fishY - fishDot * 2 - altDotRow, fishDot);
  //ellipse(fishX6, fishY + fishDot * 3 - altDotRow, fishDot);

  ellipse(fishX5, fishY, fishDot); //5th row from nose
  ellipse(fishX5, fishY + fishDot, fishDot);
  ellipse(fishX5, fishY - fishDot, fishDot);
  ellipse(fishX5, fishY + fishDot * 2, fishDot);
  ellipse(fishX5, fishY - fishDot * 2, fishDot);

  ellipse(fishX4, fishY - altDotRow, fishDot); //4th row from nose
  ellipse(fishX4, fishY + fishDot - altDotRow, fishDot);
  ellipse(fishX4, fishY - fishDot - altDotRow, fishDot);
  ellipse(fishX4, fishY + fishDot * 2 - altDotRow, fishDot);

  ellipse(fishX3, fishY, fishDot); // third row
  ellipse(fishX3, fishY + fishDot, fishDot);
  ellipse(fishX3, fishY - fishDot, fishDot);

  ellipse(fishX2, fishY - altDotRow, fishDot); // second row
  ellipse(fishX2, fishY + fishDot - altDotRow, fishDot);

  ellipse(fishX, fishY, fishDot); //nose of fish
}
