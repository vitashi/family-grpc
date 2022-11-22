const utils = require("../utils")

const ProductProtoFile = "./Product/product.proto";

const package = utils.loadPackage(ProductProtoFile)

const createProduct =  (call, callback) => {
    console.log("method called")
    callback(null, {name: call.request.name});
}

const getProducts = (call, callback) => {
    callback(null, {name: 'Hello ' + call.request.name});
}

const addServiceMethods = (serverInstance) => {
    serverInstance.addService(package.Product.service, {
        createProduct: createProduct,
        getProducts: getProducts,
    });
}

exports.addServiceMethods = addServiceMethods;
