const path = require('path');
const fs = require('fs');

const { rootDir } = require('../utils/paths');

const productsFilePath = path.join(rootDir, 'database', 'products.json');

const fetchProductsFromFile = (onProductsFetched) => {
    fs.readFile(productsFilePath, (err, data) => {
        if (err) {
            onProductsFetched([]);
        } else {
            onProductsFetched(JSON.parse(data));
        }
    });
};

class Product {
    constructor(name) {
        this.name = name;
    }

    save(onSaveSuccessful, onSaveFailed) {
        fetchProductsFromFile((products) => {
            products.push(this);

            fs.writeFile(productsFilePath, JSON.stringify(products), (err) => {
                if (err) {
                    onSaveFailed(err);
                } else {
                    onSaveSuccessful();
                }
            });
        });
    }

    static fetchAllProducts(onProductsFetched) {
        fetchProductsFromFile((products) => {
            onProductsFetched(products);
        });
    }
}

module.exports = { Product: Product };