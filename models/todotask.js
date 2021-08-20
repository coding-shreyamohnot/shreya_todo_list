const mongoose = require("mongoose"); //we use cont for packages 
const Todotaskschema = new mongoose.Schema({ //schema is for hoe the record should be send to the database, it is blue print for the record.
    content:{
        type: String,
        required: true
    },

    date:{
        type: Date,
        default : Date.now
    } //these both are the fields for the record. 
});
module.exports = mongoose.model("TodoTask", Todotaskschema); // i am exporting the Todoaskschema as TodoTask