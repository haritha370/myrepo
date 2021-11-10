var mongoose    = require('./customerSchema');
var CustomerSchema  = mongoose.model('Customer');
//const handleResponse = (res, data) => res.status(200).send(data);
//const handleError = (res, err) => res.status(500).send(err);
exports.create = (req, res) => {
    // Create a Brand
    const customerSchema = new CustomerSchema({  
      customerName: req.body.customerName,
      customerAge: req.body.customerAge,
      customerPh: req.body.customerPh,
      customerAddress: req.body.customerAddress  });
  
    // Save Brand in the database
    customerSchema
      .save(customerSchema)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the customer."
        });
      });
  };
  exports.findAll = (req, res) => {
    CustomerSchema.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customer."
        });
      });
  };
  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    CustomerSchema.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found customer with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving customer with id=" + id });
      });
  };
  exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    CustomerSchema.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update  Customer  with id=${id}. Maybe Customer was not found!`
          });
        } else res.send({ message: " Customer  was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating  Customer  with id=" + id
        });
      });
  };
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    CustomerSchema.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete   Customer  with id=${id}. Maybe  Customer  was not found!`
          });
        } else {
          res.send({
            message: " Customer  was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete  Customer  with id=" + id
        });
      });
  };
  