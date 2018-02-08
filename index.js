var readLineSync = require("readline-sync");

while (true){
var a = Math.floor(Math.random() * (9999-1000)) + 1000;
var b = String(a);
var k = 0;
for (var i = 0; i <= 3; i++) {
	for (var j = 0; j <= 3; j++) {
		if (b[i] == b[j] && i !=j)  {
			k=1
		}
	}
}
if (k == 0){
	break
}
}

while (true){
	var bull = 0;
	var cow = 0;
	var answer = readLineSync.question("Your number?");
	if (answer.length > 4) {
		console.log("Error");
		break
	}
	for (var i = 0; i <= 3; i++) {
	  	for (var j = 0; j <= 3; j++) {
	  		if (answer[i] == b[j]){
	  			if (i == j){
	  				bull++;

	  			}
	  			else{
	  				cow++;;
	  			}
	  		}
	  	}
	}
	if (bull == 4){
		console.log(`Congratulation!! `);
		break;
	}
	else{
		console.log(`Bulls - ` + bull);
		console.log('Cows - ' + cow);
		console.log('Try again');
	}

}
