let currentEmoji = 0;
const emojiTypes = ['happy', 'sad', 'surprised'];

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
    fill(255, 223, 0); // Yellow
    noStroke();
    ellipse(width/2, height/2, 200, 200);
    
    // Draw eyes
    fill(0);
    ellipse(width/2 - 40, height/2 - 20, 30, 30);
    ellipse(width/2 + 40, height/2 - 20, 30, 30);
    
    // Draw mouth based on emoji type
    switch(emojiTypes[currentEmoji]) {
        case 'happy':
            // Happy mouth (smile)
            noFill();
            stroke(0);
            strokeWeight(4);
            arc(width/2, height/2 + 20, 100, 60, 0, PI);
            break;
            
        case 'sad':
            // Sad mouth (frown)
            noFill();
            stroke(0);
            strokeWeight(4);
            arc(width/2, height/2 + 40, 100, 60, PI, TWO_PI);
            break;
            
        case 'surprised':
            // Surprised mouth (circle)
            fill(0);
            ellipse(width/2, height/2 + 40, 40, 40);
            break;
    }
}

function mousePressed() {
    // Cycle through emoji types
    currentEmoji = (currentEmoji + 1) % emojiTypes.length;
} 