const express=require('express')

const {  route  } = require('express/lib/application')

const detail=require ("../models/detail");
const Slider = require("../models/Slider");
const Service = require('../models/Service');
const contact = require('../models/contact');

const routes = express.Router()

routes.get("/", async (request,response)=>{

    const details = await detail.findOne({"_id":"64b0290b1673b59bea1c27ed"})
    const slides = await Slider.find()
    const services =await Service.find()
    // console.log(details)
    // console.log(slides)

    response.render("index",{
        details:details,
        slides:slides,
        services:services
    })
})

// routes.get('/services',(request,response)=>{
//     response.render("services")
// })
routes.get("/services", async (request,response)=>{

    
    const details = await detail.findOne({"_id":"64b0290b1673b59bea1c27ed"})
    const services =await Service.find()       

    response.render("services",{
        details:details,
        services:services
    })
})


routes.get("/contactUs", async (request,response)=>{

    const details = await detail.findOne({"_id":"64b0290b1673b59bea1c27ed"})
    const services =await Service.find()
    

    response.render("contactUs",{
        details:details,
        services:services
    })
})
routes.get("/about", async (request,response)=>{

    const details = await detail.findOne({"_id":"64b0290b1673b59bea1c27ed"})
    

    response.render("about",{
        details:details,
    
    })
})
routes.post("/process-contact-form", async (request,response) => {
    console.log("submitted")
    // console.log(request.body)
    try {
        
        const data =await contact.create(request.body)
        console.log(data)
        response.redirect("/")

    } catch (error) {
        console.log(error)
        response.redirect("/")
    }
})


module.exports=routes