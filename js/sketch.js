let shapes = [];
const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD'];
const shapeTypes = ['circle', 'square', 'triangle'];

function setup() {
    let canvas = createCanvas(800, 400);
    canvas.parent('sketch-container');
    background(255);
    
    // Create initial shapes
    for (let i = 0; i < 10; i++) {
        addShape();
    }
}

function draw() {
    background(255);
    
    // Update and draw all shapes
    for (let shape of shapes) {
        // Move shape towards mouse
        let dx = mouseX - shape.x;
        let dy = mouseY - shape.y;
        shape.x += dx * 0.02;
        shape.y += dy * 0.02;
        
        // Draw shape
        fill(shape.color);
        noStroke();
        
        switch(shape.type) {
            case 'circle':
                ellipse(shape.x, shape.y, shape.size);
                break;
            case 'square':
                rectMode(CENTER);
                rect(shape.x, shape.y, shape.size, shape.size);
                break;
            case 'triangle':
                triangle(
                    shape.x, shape.y - shape.size/2,
                    shape.x - shape.size/2, shape.y + shape.size/2,
                    shape.x + shape.size/2, shape.y + shape.size/2
                );
                break;
        }
    }
}

function addShape() {
    shapes.push({
        x: random(width),
        y: random(height),
        size: random(20, 60),
        color: random(colors),
        type: random(shapeTypes)
    });
}

function mousePressed() {
    // Add new shape at mouse position
    shapes.push({
        x: mouseX,
        y: mouseY,
        size: random(20, 60),
        color: random(colors),
        type: random(shapeTypes)
    });
    
    // Keep only the last 15 shapes
    if (shapes.length > 15) {
        shapes.shift();
    }
} 