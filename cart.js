///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
//New Answer:
const summedPrice = cart.reduce((a, c) => {
    return a + c.price
}, 0)

//must have starting accumulator 
console.log(summedPrice)
console.log('--------------------------------------------------')


//Original Answer:
//const price = cart.filter(function(element){
    //return element.price
//})
//console.log(price)

//const summedPrice = cart.reduce(/* CALLBACK HERE */)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
//New Answer:

function calcFinalPrice(cartTotal, couponValue, tax){
    return cartTotal + (cartTotal * tax) - couponValue
}
console.log(calcFinalPrice(10, 2, 0.5))





//Original Answer:
//function calcFinalPrice(cartTotal, couponValue, tax){

//}



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    name: (string), orders need a name to identify the customer
    addres: (string), need address to send order
    phone: (number), needed to contact customer about order
    wantMarketingEmails: (boolean), needed to know if the customer is interested in deals
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
//New Answer:
let custObj ={
    name: 'Nate',
    address: '3445 whatever St, Salt Lake, Ut 86009',
    phone: 8015567653,
    wantMarketingEmails: false
}







//Original Answer:
//ran out of time
