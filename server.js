const grpc = require("@grpc/grpc-js")

const CategoryService = require("./Category/service")
const ProductService = require("./Product/service")

const server = new grpc.Server();

const startServer = () => {
    server.bindAsync("0.0.0.0:40000", grpc.ServerCredentials.createInsecure(), () => {
        server.start();
    });
}

function main() {
    CategoryService.addServiceMethods(server)
    ProductService.addServiceMethods(server)
    startServer()
  }
  
main();
