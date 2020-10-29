/**
 * A promise is an object that may produce a single value some time in the future either resolved or rejected
 */


const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff worked');
    } else {
        reject('Erro it broke');
    }
});


promise.then((data) => console.log(data)).catch(err => console.err(err));
// catch is called only once

/**
 * promise all will resolve the array of promise and return a new array of values, if one promise fails then all will be rejected
 * 
 * 
 */

 /**
  * async await is more for the redable formatting of the data
  */

 