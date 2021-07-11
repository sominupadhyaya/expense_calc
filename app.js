const nameInput  = document.querySelector('.name-input')
const quantityInput  = document.querySelector('.quantity-input')
const priceInput  = document.querySelector('.price-input')
const btn = document.querySelector('#btn')
const btn2 = document.querySelector('.clear')

btn.addEventListener('click' , function(){
    const h2 = document.createElement('h1')
    h2.textContent = `You spent ${quantityInput.value *  priceInput.value} on ${nameInput.value}`
    h2.classList.add('space')
    document.body.appendChild(h2)
    nameInput.value = ''
    quantityInput.value = ''
    priceInput.value = ''
btn2.addEventListener('click' , function(){
        h2.textContent = ''
    })
})