const Product = require('../Database/Models/Product');
const RootService = require('./RootService');

class ProductService extends RootService {
    async store(data) {
        try {
            let product = new Product({ ...data });
            return await product.save();
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
}

module.exports = new ProductService(Product);