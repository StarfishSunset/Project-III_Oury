let data;


function preload() {
  data = loadJSON("meteorite.json");
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(1, 46, 64);

textAlign(CENTER);  
textSize(30);
fill(255);
textFont('Nerko One')
text("Meteorites", 300, 50);

for (let m = 0; m < data.meteorite.length; m++) {
  let annoyed = data.meteorite[m];
  console.log(annoyed);
  
}

}

