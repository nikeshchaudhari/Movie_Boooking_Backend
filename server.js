const http = require("http")
const app = require("./app")
const server = http.createServer(app)
server.listen(4080,()=>{
    console.log("Movie booking server running....");
    
})