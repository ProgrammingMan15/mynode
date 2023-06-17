const app=require("express")()
const http=require("http").Server(app)
const route=require("./routes/index")
var io=require("socket.io")(http)
app.use(route)

io.on("connection",(socket)=>{
   socket.emit("broadcas","Helloshihab")
   socket.broadcast.emit("broadcas","hello")
    socket.on("disconnect",()=>{
        console.log("disconnect")
    })
})
http.listen(2000,(()=>{
    console.log("hello")
}))