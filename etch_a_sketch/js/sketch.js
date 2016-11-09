var div = '<div class="grid"></div>';
var count;

function ten() {
	count = 100;
	grid(count);
}

function twenty() {
	count = 400;
	grid(count);
};

function thirty() {
	count = 900;
	grid(count);
};

function grid(count) {
	$("#screen").empty();
	for(i = 1; i <= count; i++) {
		$("#screen").append(div);
	};

	var dimension = 600 / Math.sqrt(count) - 2;
	$(".grid").width(dimension);
	$(".grid").height(dimension);
};


// 400 / 16 - 2 would result in correct grid width and heigh for 16 x 16