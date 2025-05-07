let faceColor = [255, 223, 0]; // Default yellow
let eyeStyle = 0;
let mouthStyle = 0;

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('sketch-container');
    background(255);
}

function draw() {
    background(255);
    drawEmoji();
}

function drawEmoji() {
    // Draw face
    fill(faceColor[0], faceColor[1], faceColor[2]);
    noStroke();
    ellipse(width/2, height/2, 200, 200);
    
    // Draw eyes based on style
    fill(0);
    switch(eyeStyle) {
        case 0: // Normal eyes
            ellipse(width/2 - 40, height/2 - 20, 30, 30);
            ellipse(width/2 + 40, height/2 - 20, 30, 30);
            break;
        case 1: // Square eyes
            rectMode(CENTER);
            rect(width/2 - 40, height/2 - 20, 30, 30);
            rect(width/2 + 40, height/2 - 20, 30, 30);
            break;
        case 2: // Triangle eyes
            triangle(
                width/2 - 40, height/2 - 35,
                width/2 - 55, height/2 - 5,
                width/2 - 25, height/2 - 5
            );
            triangle(
                width/2 + 40, height/2 - 35,
                width/2 + 55, height/2 - 5,
                width/2 + 25, height/2 - 5
            );
            break;
    }
    
    // Draw mouth based on style
    stroke(0);
    strokeWeight(4);
    switch(mouthStyle) {
        case 0: // Smile
            noFill();
            arc(width/2, height/2 + 20, 100, 60, 0, PI);
            break;
        case 1: // Frown
            noFill();
            arc(width/2, height/2 + 40, 100, 60, PI, TWO_PI);
            break;
        case 2: // Open mouth
            fill(0);
            ellipse(width/2, height/2 + 40, 40, 40);
            break;
        case 3: // Wavy mouth
            noFill();
            beginShape();
            for(let x = width/2 - 50; x <= width/2 + 50; x += 10) {
                let y = height/2 + 40 + sin(x * 0.1) * 20;
                vertex(x, y);
            }
            endShape();
            break;
    }
}

// Global functions for button controls
function changeFaceColor() {
    faceColor = [
        random(200, 255),
        random(200, 255),
        random(200, 255)
    ];
}

function changeEyeStyle() {
    eyeStyle = (eyeStyle + 1) % 3;
}

function changeMouthStyle() {
    mouthStyle = (mouthStyle + 1) % 4;
} 