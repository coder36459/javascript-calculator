document.body.innerHTML = "<main class=\"container-fluid bg-dark\"><header class=\"d-flex justify-content-center pt-4\"><h1 class=\"text-white\">JavaScript Calculator</h1></header><section class=\"d-flex justify-content-center pt-5\"><input class=\"form-control form-control-lg\" id=\"display\" type=\"text\" name=\"display\" value=\"0\" disabled></section><section class=\"d-flex mb-4 gap-4 justify-content-center pt-4\"><button class=\"btn btn-primary btn-lg\" id=\"seven\" type=\"button\">7</button><button class=\"btn btn-primary btn-lg\" id=\"eight\" type=\"button\">8</button><button class=\"btn btn-primary btn-lg\" id=\"nine\" type=\"button\">9</button><button class=\"btn btn-warning btn-lg\" id=\"divide\" type=\"button\">/</button></section><section class=\"d-flex mb-4 gap-4 justify-content-center\"><button class=\"btn btn-primary btn-lg\" id=\"four\" type=\"button\">4</button><button class=\"btn btn-primary btn-lg\" id=\"five\" type=\"button\">5</button><button class=\"btn btn-primary btn-lg\" id=\"six\" type=\"button\">6</button><button class=\"btn btn-warning btn-lg\" id=\"multiply\" type=\"button\">*</button></section><section class=\"d-flex mb-4 gap-4 justify-content-center\"><button class=\"btn btn-primary btn-lg\" id=\"one\" type=\"button\">1</button><button class=\"btn btn-primary btn-lg\" id=\"two\" type=\"button\">2</button><button class=\"btn btn-primary btn-lg\" id=\"three\" type=\"button\">3</button><button class=\"btn btn-warning btn-lg\" id=\"subtract\" type=\"button\">-</button></section><section class=\"d-flex mb-4 gap-4 justify-content-center\"><button class=\"btn btn-primary btn-lg\" id=\"zero\" type=\"button\">0</button><button class=\"btn btn-warning btn-lg\" id=\"decimal\" type=\"button\">.</button><button class=\"btn btn-danger btn-lg\" id=\"clear\" type=\"button\">C</button><button class=\"btn btn-warning btn-lg\" id=\"add\" type=\"button\">+</button></section><section class=\"d-flex justify-content-center\"><button class=\"btn btn-success btn-lg\" id=\"equals\" type=\"button\">=</button></section><footer class=\"text-white\">Made by <a href=\"https://www.linkedin.com/in/maciej-browarski\" target=\"_blank\">Maciej Browarski</a></footer></main>";
const di = document.getElementById("display");
const bu = document.querySelectorAll("button");
bu.forEach((v) => {v.addEventListener("click", () => {calc(v.innerText)})});
document.body.onkeydown = () => {calc(event.key.toUpperCase())};

let a = "";
let b = "";
let c = "";
let d = 0;
let h = "";

function calc(e) {
	
	let nu = Number(e);
	
	if (!isNaN(nu)) {
		
		if (e == "0" && a == "0") {
			a = "";
		} 
		a += e;
		d = a;
	}
	
	h += e;
	
	if (h.includes("*-") == true && c.length == 2) {
		b = Number(b)
		
		if (a !== "") {
			a = (-1) * Number(a);
			h = "";
		}
	}
	
	switch (e) {
		
		case "C":
		a = "";
		b = "";
		c = "";
		d = 0;
		break;
		
		case "+":
		c += e;
		if (b == "") {
			b = a;
			a = "";
		}
		break;
		
		}

	if (e == "." && a.includes(".") == false) {
		a += "."
	}
	
	if (e == "*") {
		c += e;
		
		if (b == "") {
			b = a;
			a = "";
		}
	}
	
	if (e == "/") {
		c += e;
		
		if (b == "") {
			b = a;
			a = "";
		}
	}
	
	if (e == "-") {
		c += e;
		
		if (a.includes("-") == false && a == "" && b == "") {
			a += "-";
			d = a;
			c = "";
		}
		
		if (a !== "" && b == "") {
			b = a;
			a = "";
		}

	}
	
	if (e == "=") {
		
		if (c == "+") {
			d = Number(b) + Number(a);
			a = "";
			b = d;
			c = "";
		}
		
		if (c == "*") {
			d = Number(b) * Number(a);
			a = "";
			b = d;
			c = "";
		}
		
		if (c == "/") {
			d = Number(b) / Number(a);
			a = "";
			b = d;
			c = "";
		}
		
		if (c == "-") {
			d = Number(b) - Number(a);
			a = "";
			b = d;
			c = "";
		}
		
	}
		
	if (a !== "" && b !== "" && c.length == 2) {
		let x = "";
		x = c.slice(0,1);
		
		if (x == "+") {
			d = Number(b) + Number(a);
			b = d;
			a = "";
			c = e;
		}
		
		if (x == "*") {
			d = Number(b) * Number(a);
			b = d;
			a = "";
			c = e;
		}
		
		if (x == "/") {
			d = Number(b) / Number(a);
			b = d;a = "";
			c = e;
		}
		
		if (x == "-") {
			d = Number(b) - Number(a);
			b = d;
			a = "";
			c = e;
		}
		
	}
	
	if (c.length > 2) {
		c = e;
	}
	
	if (h.includes("++") == true && c.length == 2) {
		c = "+";
		h = "";
	}
	
	di.value = d;
}
