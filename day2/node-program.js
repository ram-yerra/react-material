var fs = require('fs');
console.log("Hello world ...");
// 3-4 lines

var commands = {
'pwd': function () {
	console.log(process.cwd());
},
'ls': function (args) { // New property added here.
	fs.readdir(args[0] || process.cwd(), function (err, entries) {
		entries.forEach(function (e) {
			console.log(e);
		});
	});
},
'sum':function(args){
	var sum = 0;
	for (var i = 0; i < args.length; i++) {
		if( !isNaN(parseInt(args[i]))){
			sum = sum + parseInt(args[i]);
		}
	}
	console.log("sum is "+sum);
}	
};


process.stdin.on('data', function (input) {
	var matches = input.toString().match(/(\w+)(.*)/);
	var command = matches[1].toLowerCase();
	var args = matches[2].trim().split(/\s+/);
	try{
		commands[command](args);	
	}catch(e){
		console.log("Error:"+e);
	}
});


// node node-program
// ls -> lists all files
// sum 5 6 7 -> gives the sum of all