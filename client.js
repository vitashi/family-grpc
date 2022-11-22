const grpc = require("@grpc/grpc-js")
const protoLoader = require("@grpc/proto-loader");

const categoryDef = protoLoader.loadSync("./Category/category.proto", {})
const categoryGrpcObj = grpc.loadPackageDefinition(categoryDef);
const categoryPackage = categoryGrpcObj.CategoryPackage;

function main(){

    var client = new categoryPackage.Category("0.0.0.0:40000", grpc.credentials.createInsecure());
    client.createCategory({name: "category1"}, (err, response) => {
        console.log(response)
    })
}

main()