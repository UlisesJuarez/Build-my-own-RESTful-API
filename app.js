const express=require("express")
const bodyParser=require("body-parser")
const ejs=require("ejs")
const moongose=require("mongoose")

const app=express()

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(express.static("public"))

moongose.connect("mongodb://localhost:27017/wikiDB",{useNewUrlParser:true});

const articleSchema={
    title:String,
    content:String
}

const Article=moongose.model("Article",articleSchema);


app.listen(3000,function(){
    console.log("Server started on port 3000");
})