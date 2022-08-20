const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'email must be required'],
        unique: [true, 'email must be unique'],
        trim: true,
        lowercase: true,
     },
   
 
    password: {
        type: String,
        required: [true, 'password must be required'],
        minlength: [5, 'password must be at least 5 characters']
    },
    role: {
        type: String,
        require: true
    }
},
{
    timestamps: true 
})




const Admin = mongoose.model('admin', adminSchema)

module.exports = Admin