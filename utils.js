const grpc = require("@grpc/grpc-js")
const protoLoader = require("@grpc/proto-loader");

const loadPackage = (protoFile) => {
    const categoryDef = protoLoader.loadSync(protoFile, {})
    const categoryGrpcObj = grpc.loadPackageDefinition(categoryDef);
    return categoryGrpcObj.CategoryPackage;
}

exports.loadPackage = loadPackage