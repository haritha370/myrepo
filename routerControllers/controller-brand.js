var mongoose    = require('./brandSchema');
var BrandSchema  = mongoose.model('Brand');
//const handleResponse = (res, data) => res.status(200).send(data);
//const handleError = (res, err) => res.status(500).send(err);
exports.create = (req, res) => {
    // Create a Brand
    const brandSchema = new BrandSchema({
      brandName: req.body.brandName    });
  
    // Save Brand in the database
    brandSchema
      .save(brandSchema)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the brand."
        });
      });
  };
  exports.findAll = (req, res) => {
    BrandSchema.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving brand."
        });
      });
  };
  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    BrandSchema.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found brand with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving brand with id=" + id });
      });
  };
  exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    BrandSchema.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Brand with id=${id}. Maybe Brand was not found!`
          });
        } else res.send({ message: "Brand was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Brand with id=" + id
        });
      });
  };
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    BrandSchema.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete  Brand with id=${id}. Maybe Brand was not found!`
          });
        } else {
          res.send({
            message: "Brand was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Brand with id=" + id
        });
      });
  };
  