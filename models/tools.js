const mongoose = require('mongoose')

const toolSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: [true, 'email must be required'],
        trim: true,
        lowercase: true,
     },
     tag: {
         type: String,
         required: true,
         lowercase: true
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

const Tool = mongoose.model('tool', toolSchema);

module.exports = Tool;