// try {
//     const a = 100, b = 10;
//     console.log(a / c)

// }
// catch (error) {
//     console.log('the error is ' + error)
// }
// finally {
//     console.log('done!')
// }


// try {
//     setTimeout(() => {
//         const a = 100, b = 10;
//         console.log(a / c)

//     }, 3000)
// } catch (e) {
//     console.log('the error is ' + e)
// }



// try {
//     setTimeout(function () {
//         // error in the code
//     }, 3000);
// }
//  catch (e) {
//     console.log("won't work");
// }


let email = 'john.doe.12@gmail.com';
console.log(email.slice(3, 7))
console.log((email.slice(0, email.indexOf('.'))).charAt(0).toUpperCase() + (email.slice(0, email.indexOf('.'))).slice(1))

const y = 'john.doe@gmail.com';
console.log(y.split('.'))
console.log('the first \n tutorial')
const text = "Mozilla";
console.log(text.substring(5, 2)); // "zil"
console.log(text.slice(-5, -2)); // ""


// var naame = (email.substring(0, email.indexOf('.'))).charAt(0).toUpperCase();
// naame = naame + naame.slice(1)
// let domain = email.substring(email.indexOf('@') + 1);

// console.log(domain); // gmail.com




