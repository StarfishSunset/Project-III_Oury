let data;


function preload() {
  data = loadJSON("meteorite.json");
}

function setup() {
  createCanvas(600, 450);
}

function draw() {
  background(1, 46, 64);

textAlign(CENTER);  
textSize(30);
fill(255);
textFont('Nerko One')
text("Meteorites", 300, 70);

for (let i = 0; i < data.meteorite.length; i++) {
  let annoyed = data.meteorite[i];

noStroke();
let m = map( )
fill(m);  
for (let x = 150; x < 500; x += 150) {
  for (let y = 150; y < 350; y += 90) {

    let d = annoyed.year
ellipse(x, y, 20);
 let t = annoyed.recclass 
let a = annoyed.x
let b = annoyed.y
textSize(20);
text(t, a, b + 30)
text(d, a, b + 50)
    }
  }
}

}

