const utils = require("../utils")

const categoryProtoFile = "./Category/category.proto";

const package = utils.loadPackage(categoryProtoFile)

const createCategory =  (call, callback) => {
    console.log("method called")
    callback(null, {name: call.request.name});
}

const getCategories = (call, callback) => {
    callback(null, {name: 'Hello ' + call.request.name});
}

const addServiceMethods = (serverInstance) => {
    serverInstance.addService(package.Category.service, {
        createCategory: createCategory,
        getCategories: getCategories,
    });
}

exports.addServiceMethods = addServiceMethods;
