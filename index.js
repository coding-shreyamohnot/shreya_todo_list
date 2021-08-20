var express= require("express");
var app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const TodoTask = require("./models/todotask");

// this is an extra line for ejs so that the computer can evalute ejs too
// app.use("/static", express.static("public"));
app.use(express.static(__dirname + '/public')); //it is for supporting css
app.use(express.urlencoded({ extended: true }));   //it is for smooth transmition of data thru url 
app.set("view engine","ejs"); //this is for supporting ejs
app.get('/',(req,res)=>{
TodoTask.find({},(err,result)=>{
        res.render("frontlist.ejs",{tasks:result}); //this is responsible for showing ejs file in chrome as we r rendering it .
    });
    // we changed res.send("hello world") to res.render("frontlist.ejs") so that when we want the result 
// it will show the frontlist.ejs file 
}); 
app.post('/',(req,res)=>{      //we changed post to get since we changed it in frontlist.ejs(form)
    const todotask = new TodoTask({
        content:req.body.taskname //we r passing the task what we enter in chrome to the schema 
    }); 
    todotask.save();
    res.redirect('/'); //since we redirected to home page its not browsing 
    console.log(req.body);   //this code is for receving the data
});

// app.get('/edit/:id',(req,res)=>{
//     res.render("edit_task.ejs")
// });
app.route("/edit/:id")
.get((req,res)=>{
    const id = req.params.id;
    TodoTask.find({},(err,result)=>{
            res.render("edit_task.ejs",{tasks:result, Id:id}); //this is responsible for showing ejs file in chrome as we r rendering it .
        });
    })
.post((req,res)=>{
        const id= req.params.id;
        console.log(req.body.taskname);
        TodoTask.findByIdAndUpdate(id,{content:req.body.taskname},err=>{
            if(err) throw err;
            res.redirect("/");
        });
    });
app.get("/remove/:id",(req,res)=>{
    const Id= req.params.id;
    TodoTask.findByIdAndDelete(Id,err=>{
        if(err) throw err;
        res.redirect("/");
    });
});
mongoose.set("useFindAndModify", false);
mongoose.set("useNewUrlParser", true);
 mongoose.connect("mongodb+srv://shreya:shreya@cluster0.9iyzz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useUnifiedTopology:true},
   (err,db)=>{
        if(err) throw err;
        console.log("the connection established successfully");
        app.listen(8080,()=>console.log("server is walking now"));
    }
    );
    
