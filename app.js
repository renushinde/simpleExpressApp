
let express = require("express");
let app = express(); // to set up route

app.get("/", function(req, res){
 res.send("Hi there!");
});

app.get("/speak/:animal", function(req, res){
	let sounds ={
		pig:"Oiank",
		cow:"moo",
		dog:"Woof!"
	}
	let animal = req.params.animal.toLowerCase();
	let sound = sounds[animal];
/*	console.log(req.params);*/
   res.send("The " + animal + " says '" +  sound + "'");
});

app.get("/repeat/:message/:times", function(req, res){
  let message = req.params.message;
  let times = Number(req.params.times);
  let result ="";

    for( let i=0; i< times; i++) {
  	result += message + " ";
  }

    res.send(result);
  //res.send("Message: " + message  + " Times: " + times);
    });

app.get("*", function(req, res){
	res.send(" Route not found!");
});

app.listen(3000, function(){
	console.log("Server has started on port 3000");
});