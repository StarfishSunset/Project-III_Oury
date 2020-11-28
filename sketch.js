let data;
let img;

function preload() {
  data = loadJSON("meteorite.json");
  img = loadImage("austronaut.png")
}

function setup() {
  createCanvas(600, 450);
}

function draw() {
  background(1, 46, 64);
  image(img, mouseX, mouseY, 70, 100);

textAlign(CENTER);  
textSize(30);
fill(255);
textFont('Nerko One')
text("Meteorites", 300, 70);

for (let i = 0; i < data.meteorite.length; i++) {
  let annoyed = data.meteorite[i];

noStroke();

let m = map(annoyed.mass, )
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

  if (x > a && x < a && y > b && y < b) {
let k = annoyed.name
text(k, a + 30, b)
  }
}
  }
}

}

