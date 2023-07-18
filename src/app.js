const express = require("express");

const hbs=require("hbs")

const app=express ();

const mongoose=require("mongoose");
const bodyParser=require('body-parser')

const routes=require('./routes/main');
const detail = require("./models/detail");
const Slider = require("./models/Slider");
const Service=require("./models/Service");

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use('/static',express.static("public"))
app.use('',routes)


//(template engine)

app.set('view engine','hbs')
app.set("views","views")
hbs.registerPartials("views/partials")

//db connect
mongoose.connect("mongodb://127.0.0.1/school_website",{

}).then(async function (){
    console.log("db connected")

    // Service.create([
    //     {
    //         icon:'fa-solid fa-graduation-cap ',
    //         title:'Scholarship Facility',
    //         description:'“Scholarship is to be created not by compulsion, but by awakening a pure interest in knowledge”',
    //         linkText:'',
    //         link:''
    //     },

    //     {
    //         icon:'fa-fa-sharp fa-solid fa-print-magnifying-glass fa-graduation-cap ',
    //         title:'Sell Online Course',
    //         description:'“The secret to selling online courses is to think about your course as the solution to a problem.”',
    //         linkText:'',
    //         link:''
    //     },

    //     {
    //         icon:'fa-solid fa-file-certificate',
    //         title:'Global Certification',
    //         description:'“The humans need the certificates of education, but the knowledge needs no certification.”',
    //         linkText:'',
    //         link:''
    //     },
    // ])



//     Slider.create([
//         {
//             title:'Come,Learn,Grow',
//             subTitle:'We teach you, how to grow',
//             imageUrl:"/static/images/background.jpg"
//         },
//         {
//             title:'Better Experience',
//             subTitle:'better learning ,better placement ',
//             imageUrl:"/static/images/3.jpg"
//         },
//         {
//             title:'Higher Secondary',
//             subTitle:'We teach you, how to grow',
//             imageUrl:"/static/images/1.jpg"
//         },
//     ])
//     detail.create({
//         brandName:"Billabong high school",
//         brandIconUrl:"",
//         links:[
//             {
//                 label:"Home",
//                 url:"/",
//             },
//             {
//                 label:"Services",
//                 url:"/services"
//             },
//             {
//                 label:"Gallery",
//                 url:"/gallery"
//             },
//             {
//                 label:"About",
//                 url:"/about"
//             },
//             {
//                 label:"Contact US",
//                 url:"/contact-us"
//             },
//         ]
// })
})    
    



app.listen ( process.env.PORT| 1234 ,()=>{
    console.log("server started");
});
