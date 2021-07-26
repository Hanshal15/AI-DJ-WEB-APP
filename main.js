song = ""

function preload() {
   song = loadSound("music.mp3")
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,0,0,600,500);
}

function play() {
    song.play(); //it is a pre-defiened funtion of p5 that starts playing music
}

function stop() {
    song.stop(); //it is a pre-defiened funtion of p5 that starts stops music
}