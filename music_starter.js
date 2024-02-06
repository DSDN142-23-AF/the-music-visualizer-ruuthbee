// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(65, 90, 119); //stoney blue
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER);
  textSize(24);

  let bar_spacing = height / 10;
  let bar_height = width / 12;
  let bar_pos_x = width / 2;

  var ballSize = 40;
  var otherHeight = map(other, 0, 100, height / 2, height);

  fill(255, 120);
  ellipse(100, otherHeight, ballSize);

  var drumHeight = map(drum, 0, 100, height / 2, height - 200);
  fill(255, 120);
  ellipse(200, drumHeight, ballSize);

  var bassHeight = map(bass, 0, 100, height / 2, height - 200);
  fill(255, 120);
  ellipse(300, bassHeight, ballSize);

  var vocalHeight = map(vocal, 0, 100, height / 2, height);
  fill(255, 120);
  ellipse(400, vocalHeight, ballSize);

  noFill();
  beginShape();
  curveVertex(1280, 720 / 2);
  curveVertex(1280, bassHeight - 50);
  curveVertex(1280 / 2, drumHeight);
  curveVertex(1280 / 4, bassHeight - 50);
  curveVertex(0, drumHeight);
  curveVertex(0, 720 / 2);
  endShape();

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
