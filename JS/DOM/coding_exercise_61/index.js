// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const list = document.querySelector('#list');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const product = form.elements.product;
    const quantity = form.elements.qty;
    
    const newLi = document.createElement('li')
    newLi.innerText = `${quantity.value} ${product.value}` ;
    list.appendChild(newLi);
    product.value = "";
    quantity.value = "";
    // form.reset();
});