/*var setup=function() {
	alert(1);
	return function(){
		alert(2);
	};
}
var a=setup();
a(); */

var setupone=function() {
	var count=0;
	return function() {
		return (count+=1);
	};
}
var next=setupone();
next();
next();
next(); 

/*var ScareMe=function() {
	alert("Boo!");
	ScareMe=function() {
		alert("Double Boo!");
	};
}
ScareMe();
ScareMe();*/

/*(function() {
	alert("Kappa");
}());*/
