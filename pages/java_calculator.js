var product = {
    name: 'Dukes',
    price: 95.99,
    discount: 28.80,
    checkDiscount: function () {
        return this.price - this.discount;
    }
};

var elName = document.getElementById('productName');
elName.textContent = product.name;

var elPrice = document.getElementById('price');
elPrice.textContent = product.checkDiscount();
