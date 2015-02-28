$(document).ready(function() {
	var questions = [{q: "H", a: "Hydrogen", 1: "Helium", 2: "Hydrogen", 3: "Silicon", 4: "Calcium"},
					 {q: "O", a: "Oxygen", 1: "Iron", 2: "Neon", 3: "Lithium", 4: "Oxygen"},
					 {q: "Na", a: "Sodium", 1: "Carbon", 2: "Neon", 3: "Sodium", 4: "Nitrogen"},
					 {q: "K", a: "Potassium", 1: "Potassium", 2: "Lead", 3: "Platinum", 4: "Lithium"},
					 {q: "Al", a: "Alumimum", 1: "Titanium", 2: "Alumimum", 3: "Calcium", 4: "Nitrogen"},
					 {q: "Si", a: "Silicon", 1: "Platinum", 2: "Lead", 3: "Iron", 4: "Silicon"},
					 {q: "He", a: "Helium", 1: "Helium", 2: "Lithium", 3: "Titanium", 4: "Carbon"},
					 {q: "Au", a: "Gold", 1: "Gold", 2: "Iron", 3: "Neon", 4: "Nitrogen"},
					 {q: "Pb", a: "Lead", 1: "Silicon", 2: "Gallium", 3: "Calcium", 4: "Lead"},
					 {q: "Ag", a: "Silver", 1: "Carbon", 2: "Silver", 3: "Helium", 4: "Iron"}];

	var counter = 0;
	var rightAns = 0;
	var wrongAns = 0;

	function start() {
		counter = 0;
		rightAns = 0;
		wrongAns = 0;
		$(".icons").empty();
		document.getElementById("numbercor").innerHTML = rightAns;
		document.getElementById("numberinc").innerHTML = wrongAns;
		document.getElementById("element").innerHTML = questions[0]["q"];
		for (i = 1; i < 5; i++) {
			$(".itemList").append("<li><button class='options'>" + questions[0][i] + "</button></li>");		
		};
	};

	function listQuestions(j) {
		$(".itemList").empty();
		document.getElementById("element").innerHTML = questions[j]["q"];
		for (i = 1; i < 5; i++) {
			$(".itemList").append("<li><button class='options'>" + questions[j][i] + "</button></li>");
		};
	};

	function Compare(i, j) {
		if (i == j) {
			$(".icons").append("<li class='correct'><i class='fa fa-check-circle'></i></li>");
			rightAns++;
			document.getElementById("numbercor").innerHTML = rightAns;
		}
		else {
			$(".icons").append("<li class='wrong'><i class='fa fa-circle'></i></li>");	
			wrongAns++;
			document.getElementById("numberinc").innerHTML = wrongAns;
		}
	};

  	$(".itemList").on("click", ".options", function() {
  		// compare(counter);
  		// var selec = this.innerHTML;
  		Compare(this.innerHTML, questions[counter]["a"]);
  		counter++;
  		if (counter >= questions.length) {
  			document.getElementById("nright").innerHTML = rightAns;
  			document.getElementById("nwrong").innerHTML = wrongAns;
  			gameoverf();
  			start();
  		}
  		listQuestions(counter);
  	});

  	start();
});

function gameoverf() {
		el = document.getElementById("gameover");
		el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
};