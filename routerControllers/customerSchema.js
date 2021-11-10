const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const CustomerSchema = new Schema({
    customerName:{type:String},
    customerAge:{type:String},
    customerPh:{type:Number},
    customerAddress:{type:String}

});
mongoose.model('Customer', CustomerSchema);
mongoose.connect('mongodb://localhost:27017/brandCustomerDb', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('Connected to the DB');
});

module.exports = mongoose;