const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const userSchema= new Schema({
    email: {
        type: String,
        required:true
    },
    password:{
        type: Object,
        required:true
    },
    user_name:{
        type: String,
        required:true
    }
});
module.exports=mongoose.model('user_details',userSchema);