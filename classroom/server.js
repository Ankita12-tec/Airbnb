const express = require('express');
const app = express();
const users = require('./router/user.js');
const posts = require('./router/post.js');
/*const cookieParser=require("cookie-parser")*/
const  session = require('express-session');
const flash=require("connect-flash");
const path=require("path");
const req = require('express/lib/request.js');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOptions={
    secret:"mysupersecretstring",
    resave:false,
    saveUninitialized:true,
};

app.use(session(sessionOptions));

app.use(flash());

app.use((req,res,next)=>{
    res.locals.successMsg=req.flash("success");
    res.locals.errorMsg=req.flash("error");
    next();
});

app.get("/register",(req,res)=>{
 let {name="anonymous"}=req.query;
 req.session.name=name;
 
 if(name==="anonymous"){
    req.flash("error","user not registered");
 }else{
     req.flash("success","user registered successfully");

 }
 res.redirect("/hello");
}
);

app.get("/hello",(req,res)=>{

    res.render("page.ejs",{name:req.session.name});
});

app.get("/reqcount", (req, res) => {
    if (req.session.count) {
        req.session.count++;
    } else {
        req.session.count = 1;
    }
    res.send(`you send a request ${req.session.count} times`);
});

/*app.get("/test",(req,res)=>{
    res.send("test suceesful");
});*/


/*app.use(cookieParser("secretcode"));

app.get("/getsignedcookies",(req,res)=>{
    res.cookie("made-in","India",{signed:true});
    res.send("signed cookie send");
});

app.get("/verify",(req,res)=>{
    console.log(req.signedCookies);
    res.send("verified");
});

app.get("/getcookies",(req,res)=>{
    res.cookie("greet","hello");
    res.send("sent some cookies");
});

app.get("/greet",(req,res)=>{
    let {name="anonymous"}=req.cookies;
    res.send(`hi,${name}`);
});

app.get("/",(req,res)=>{
    console.dir(req.cookies);
    res.send("Hii,i am root");
})

app.get('/', (req, res) => {
    res.send('Hii, I am root');
});

app.use('/users', users);
app.use('/posts', posts);*/

app.listen(3000, () => {
    console.log('server is running on port 3000');
});
