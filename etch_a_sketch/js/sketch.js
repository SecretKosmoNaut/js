var div = '<div class="grid"></div>';
var count;

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
};


// 400 / 16 - 2 would result in correct grid width and heigh for 16 x 16