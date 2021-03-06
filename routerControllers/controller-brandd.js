var mongoose = require('./brandSchema');
var BrandSchema = mongoose.model('Brand');
const handleResponse = (res, data) => res.status(200).send(data);
const handleError = (res, err) => res.status(500).send(err);
invalidInput = function () {
    return res.status(400).json({ "error": "Invalid input" });
}

internal = function () {
    return res.status(500).json({ "error": "Invalid input" });
}
success=function(){
    return res.status(200).json({"success":"true"})
}

exports.create = (req, res) => {
    // Create a Brand
    const brandSchema = new BrandSchema({
        brandName: req.body.brandName
    });

    // Save Brand in the database
    brandSchema
        .save(brandSchema)
        .then(data => {
            res.success()
        })
        .catch(err => {
            res.invalidInput()
        })
    }
    exports.findAll = (req, res) => {
        BrandSchema.find()
            .then(data => {
                res.send(data);
            })
        . catch(err => {
            res.internal()
        });
    };

    exports.update = (req, res) => {
        if (!req.body) {
            return res.invalidInput()
        }

        const id = req.params.id;

        BrandSchema.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
            .then(data => {
                if (!data) {
                    res.invalidInput()
                } else res.send({ message: "Brand was updated successfully." });
            })
           . catch(err => {
                    res.internal()
                });
    };
    exports.delete = (req, res) => {
        const id = req.params.id;

        BrandSchema.findByIdAndRemove(id)
            .then(data => {
                if (!data) {
                    res.invalidInput()}
        else {
            res.send({
                message: "Tutorial was deleted successfully!"
            });
        }
    })
      .catch (err => {
        res.internal()
    });
}