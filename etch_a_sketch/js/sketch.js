var div = '<div class="grid"></div>';
var count;
var color = "#a2bfc2"

function eight() {
	count = 64;
	grid(count);
}

function sixteen() {
	count = 256;
	grid(count);
};

function thirtyTwo() {
	count = 1024;
	grid(count);
};

function grid(count) {
	$("#screen").empty();
	for(i = 1; i <= count; i++) {
		$("#screen").append(div);
	};

	var dimension = 800 / Math.sqrt(count) - 2;
	$(".grid").width(dimension);
	$(".grid").height(dimension);
	draw();
};

function draw() {
	$(".grid").hover(function() {
		$(this).css("background-color", color);
	});
}

function changeColor(newColor) {
	color = newColor;
}