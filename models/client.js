const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: [true, 'email must be required'],
        unique: [true, 'email must be unique'],
        trim: true,
        lowercase: true,
     },
     mobileNumber: {
        type: Number,
        required: true
     },
     uuid: {
        type: String,
        required: true
      },
      wheelOfLife: {
          type: Array,
          default: []
      },
      wheelOfLifeRates:{
          type:Array,
          default:[]
      },
      baselines: {
          type: Array,
          default: []
      },
      necodes: {
          type: Array,
          default: []
      },
      decisionMakingWheel: {
          type: Array,
          default: []
      },
      outcomes: {
          type: Array,
          default: []
      }
},
{
    timestamps: true 
});

const Client = mongoose.model('client', clientSchema);

module.exports = Client;