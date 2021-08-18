var http = require('http');
var reqCount = 0; 
var server = http.createServer(function (req, res) {
	console.log(">> new request received:"+req.url + " count:"+reqCount++);
	res.statusCode = 200;
	res.write('Hello World! count :'+reqCount);
	res.end();
});
server.listen(3000);

// ab -n 10000 -c 100 http://localhost:3000/
// ab -> This is ApacheBench -> tool for benchmarking your Apache Hypertext Transfer Protocol (HTTP) server. 
// ab -> It is designed to give you an impression of how your current Apache installation performs. 
// ab -> This especially shows you how many requests per second your Apache installation is capable of serving.
