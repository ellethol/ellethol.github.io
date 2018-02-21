/*global firebase*/
/*global createCanvas*/
/*global background*/
/*global fill*/
/*global mouseIsPressed*/
/*global ellipse*/
/*global mouseX*/
/*global mouseY*/
/*global $*/
/*global saveCanvas*/

// Initialize Firebase
        var config = {
            apiKey: "AIzaSyBvTJsIrOL9mDicBEZmRYYb9018T2VEDN0",
         authDomain: "collaborative-sketch-30d16.firebaseapp.com",
            databaseURL: "https://collaborative-sketch-30d16.firebaseio.com",
         projectId: "collaborative-sketch-30d16",
            storageBucket: "",
         messagingSenderId: "124855855398"
        };
         firebase.initializeApp(config);

var pointsData = firebase.database().ref();
var points = [];

function setup(){
    var canvas = createCanvas(400, 400);
    background(255);
    fill(0);
    
    pointsData.on("child_added", function (point){
    points.push(point.val());
});
    pointsData.on("child_removed", function (point){
        points.push(point.val());
    });
    
canvas.mousePressed(drawPoint);
canvas.mouseMoved(drawPointIfMousePressed);
}

function draw(){
    background(255);
    for (var i = 0; i < points.length; i++){
        var point = points[i];
        ellipse(point.x, point.y, 5, 5);
        }
    }
    
    function drawPoint(){
        pointsData.push({x: mouseX, y: mouseY});
    }
    
    function drawPointIfMousePressed(){
        if(mouseIsPressed){
            drawPoint();
        }
    }
    
    $("#saveDrawing").on("click", saveDrawing);
    
    function saveDrawing(){
        saveCanvas();
    }
    
    $("#clearDrawing").on("click", clearDrawing);
    
    function clearDrawing(){
        pointsData.remove();
        points = [];
        
    }

