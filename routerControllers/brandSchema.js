const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;
const BrandSchema = new Schema({
    brandName:{type:String}
});
mongoose.model('Brand', BrandSchema);
mongoose.connect('mongodb://localhost:27017/brandCustomerDb', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('Connected to the DB');
});
module.exports = mongoose;