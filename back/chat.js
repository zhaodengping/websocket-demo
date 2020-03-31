let ws=require('nodejs-websocket');

console.log("建立连接")
let server=ws.createServer(function(conn){
    conn.on("text",function(str){
        conn.sendText("success")
    });
    conn.on("close",function(str){
        console.log('服务器关闭')
    })
    conn.on('error',function(str){
        console.log('关闭异常')
    })
}).listen(8081)