const mongoose = require("mongoose");
const{ Schema } = mongoose;

const projectSchema = new Schema({
    title:{
        type: String ,
        required:true,
    },
    description:{
        type: String,
        required: true
    },
    images:{
        type: [String],
        required: true
    },
    technologies:[{
        type: String,
    }],
    githubLink:{
        type:String,
    },
    projectLink: {
        type: String
    },
    
    createdAt:{
        type: Date,
        default: Date.now
    }

})
module.exports= mongoose.model("Project",projectSchema) ;