const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shop')
    .then(() => {
        console.log("CONNECTION OPEN!")
    })
    .catch(err => {
        console.log("OH NO ERROR")
        console.log(err);
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: [11, 'name is too long']
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    onSale: {
        type: Boolean,
        default: false
    },
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    category: {
        type: [String]
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }

});

productSchema.methods.greet = function () {
    console.log("HELLO!!!");
    console.log(`-from ${this.name}`);
}

productSchema.methods.toogleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save();
}
productSchema.methods.addCategory = function (newCat) {
    this.category.push(newCat);
    return this.save();
}

productSchema.statics.fireSale = function () {
    return this.updateMany({}, { onSale: true, price: 0 })
}

const Product = mongoose.model('Product', productSchema);

/* const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: "Bike Helmet" });
    foundProduct.greet();
    console.log(foundProduct);
    await foundProduct.toogleOnSale();
    console.log(foundProduct);
    await foundProduct.addCategory('Outdoor');
    console.log(foundProduct);
}
findProduct()
*/
Product.fireSale().then(p => console.log(p))

/*
const bike2 = new Product({ name: 'Montem Bike', price: 699, category: ["Racebike", "Adultbike"], size: 'XL' });
 bike2.save()
    .then(data => {
        console.log("IT WORKED!");
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })

Product.findOneAndUpdate({ name: 'Montain Bike' }, { price: 100 }, { new: true, runValidators: true })
    .then(data => {
        console.log("IT WORKED!");
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    }) */
