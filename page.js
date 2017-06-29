//加载http服务
var http=require('http');
//加载fs服务
var fs=require("fs");
//创建服务器
http.createServer(function(req,res){
	//判断请求文件路径
	//
	switch(req.url){
		case "/":
		fs.readFile("index1.html","utf-8",function(err,data){
			//判断是否成功
			if(err){
				console.log(err)
			}else{
				//创建请求头
				res.writeHead(200,{'content-type':"text/html"});
				//写入文件
				res.end(data)
			}
		})
		case "/index1.html":
		fs.readFile("index1.html","utf-8",function(err,data){
			//判断是否成功
			if(err){
				console.log(err)
			}else{
				//创建请求头
				res.writeHead(200,{'content-type':"text/html"});
				//写入文件
				res.end(data)
			}
		})
		break;
		case "/index2.html":
		fs.readFile("index2.html","utf-8",function(err,data){
			//判断是否成功
			if(err){
				console.log(err)
			}else{
				//创建请求头
				res.writeHead(200,{'content-type':"text/html"});
				//写入文件
				res.end(data)
			}
		})
		break;
		case "/index3.html":
		fs.readFile("index3.html","utf-8",function(err,data){
			//判断是否成功
			if(err){
				console.log(err)
			}else{
				//创建请求头
				res.writeHead(200,{'content-type':"text/html"});
				//写入文件
				res.end(data)
			}
		})
		break;
		case "/index1.css":
		fs.readFile("index1.css","utf-8",function(err,data){
			//判断是否成功
			if(err){
				console.log(err)
			}else{
				//创建请求头
				res.writeHead(200,{'content-type':"text/css"});
				//写入文件
				res.end(data)
			}
		})
		break;
		case "/index1.js":
		fs.readFile("index1.js","utf-8",function(err,data){
			//判断是否成功
			if(err){
				console.log(err)
			}else{
				//创建请求头
				res.writeHead(200,{'content-type':"text/javascript"});
				//写入文件
				res.end(data)
			}
		})
		break;
		case "/d1a20cf431adcbefed199d2aaeaf2edda3cc9fe9.jpg":
		fs.readFile("d1a20cf431adcbefed199d2aaeaf2edda3cc9fe9.jpg",function(err,data){
			//判断是否成功
			if(err){
				console.log(err)
			}else{
				//创建请求头
				res.writeHead(200,{'content-type':"image/jpeg"});
				//写入文件
				res.end(data)
			}
		})
		break;
		default:
		res.end("404 page not found")
		break;

	}
	
}).listen(3000,function(){
	console.log("页面已启动")
})