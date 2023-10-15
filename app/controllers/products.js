let ProductModel = require('../models/product');

module.exports.create = async function (req, res, next) {// add product to dtabase

    try {
        let newProduct = new ProductModel(req.body); //define a new product json object

        let result = await ProductModel.create(newProduct); //Use the create method from the schema class 
        console.log(result);

        res.json( //success message
            {
                success: true,
                message: "product created successfully."
            }
        );
    } catch (error) {//show error if neccessary 
        console.log(error);
        next(error);
    }

}

module.exports.list = async function (req, res, next) {//find all products
    try {
        let list = await ProductModel.find({}, '-password'); // Use the find method from the schema class 

        res.json(list);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.productByID = async function (req, res, next) { //find a single product by its id 
    try {
        let id = req.params.productID;
        req.product = await ProductModel.findOne({ _id: id }, '-password'); // use the findone mehtod from the schema class 
        next();
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.read = async function (req, res, next) {//reads the json object of the register 
    res.json(req.product);
}

module.exports.update = async (req, res, next) => {//updates a register in the database
    try {
        let productId = req.params.productID;
        let updatedproduct = ProductModel(req.body); 
        updatedproduct._id = productId; //reassign the old id so it doesnt get lost and we dont get an error

        let result = await ProductModel.updateOne({ _id: productId }, updatedproduct);// use the updateone mehtod from the schema class 
        console.log(result);
        if (result.modifiedCount > 0) {
            res.json(
                {
                    success: true,
                    message: "Product updated successfully."
                }
            );
        }
        else {
            // Express will catch this on its own.
            throw new Error('product not updated. Are you sure it exists?')
        }
    } catch (error) {
        console.log(error);
        next(error)
    }
}


module.exports.remove = async (req, res, next) => {// delete one register from the database based on the ID
    try {
        let productId = req.params.productID;

        let result = await ProductModel.deleteOne({ _id: productId });// use the delete method from the schema class 

        console.log(result);
        if (result.deletedCount > 0) {
            res.json(
                {
                    success: true,
                    message: "product deleted successfully."
                }
            );
        }
        else {
            // Express will catch this on its own.
            throw new Error('product not deleted. Are you sure it exists?')
        }
    } catch (error) {
        console.log(error);
        next(error)
    }
}