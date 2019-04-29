console.log("exercise2.js start");
// INSTRUCTIONS
// Write a function named largestBalance that accepts
// customersObj as an argument iterates through the object
// and returns the customer with the largest balance in this format.
// First Last has the largest balance.

var customersObj = {
    23567: {
        'name': {
            'first': 'Ichigo',
            'last': 'Kurosaki'
        }, 
        'customerID': 23567,
        'balance': 153677345
    },
    1234: {
        'name': {
            'first': 'Gin',
            'last': 'Ichimaru'
        }, 
        'customerID': 1234,
        'balance': 1235412356
    },
    1531: {
        'name': {
            'first': 'Shunsui',
            'last': 'Kyoraku'
        }, 
        'customerID': 1531,
        'balance': 65432467
    },
    543: {
        'name': {
            'first': 'Kisuke',
            'last': 'Urahara'
        }, 
        'customerID': 543,
        'balance': 63463723562
    },
    //This customer doesn't have a last name
    //Be sure to account for that in your function
    667: {
        'name': {
            'first': 'Ulquiorra' 
        }, 
        'customerID': 667,
        'balance': 4562647745
    }
};

function LargestBalance (balance) 
for (var customersObj, n = array.length; i < n; ++i) {
  if (LargestBalance >= 0 ? array [i] > array[LargestBalance] : array[i] >= -Infinity} {
    LargestBalance = i;
  }
}
return LargestBalance >= 0 ? array[LargestBalance] : first + " " + last + " " + "has the largest balance"
























// VERIFICATION
// These statements verify that your code does what the instructions
// ask. Do not edit these lines.
console.log(largestBalance(customersObj)); //should return Kisuke Urahara has the largest balance
customersObj["667"]["balance"] = 7774562647745;
console.log(largestBalance(customersObj)); //should return Ulquiorra has the largest balance
