var nrSquares=6;

var colors = generateRandomColors(nrSquares);

var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("color-display");
var messageDisplay=document.querySelector("#message");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	nrSquares=3;
	colors=generateRandomColors(nrSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
});

hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	nrSquares=6;
	colors=generateRandomColors(nrSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
			squares[i].style.backgroundColor=colors[i];
		
			squares[i].style.display="block";
		}
	
})


resetButton.addEventListener("click",function(){
	//generate new colors
	colors=generateRandomColors(nrSquares);
	//pick new random colors from array
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	this.textContent="New colors";
	messageDisplay.textContent="";
	//change colors of squares
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = colors[i];

	}
});

colorDisplay.textContent=pickedColor;

for(var i in squares){
	//add initial colors
	squares[i].style.backgroundColor = colors[i];

	//add click event
	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;
		console.log(clickedColor);
		console.log(pickedColor);

		if (clickedColor === pickedColor){
			messageDisplay.textContent="Correct";
			resetButton.textContent="Play again?";
			changeColors(clickedColor);



		}
			else{
				this.style.backgroundColor="#232323";
				messageDisplay.textContent="Try again";

			}
		
	});
	//grab color and compare

}

function changeColors(col){
	for(var i in squares){
		squares[i].style.backgroundColor=col;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	//add num random colors to array
	var arr =[];
	for(var i=0;i<num;i++){
		//get a random color and put in array
		arr.push(randomColor());

	}

	return arr;

}

function randomColor(){
	var r =Math.floor(Math.random()*256);
	var g =Math.floor(Math.random()*256);
	var b =Math.floor(Math.random()*256);

	return "rgb("+r +", "+g + ", " +b +")";
}