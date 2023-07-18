const mongoose = require("mongoose");
const Detail = new mongoose.Schema({
    brandName : String,
    brandIconUrl : String,
    links: [
        {
        label : String,
        url : String,
        },
    ]
});

const detail = new mongoose.model("detail",Detail);
module.exports = detail;