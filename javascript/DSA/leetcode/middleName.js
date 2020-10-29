/**
 * 'Jack Ryan' => 'Jack Ryan'
   'Lois Mary Lane' => 'Lois M. Lane'
   'Dimitri' => 'Dimitri'
   'Alice Betty Catherine Davis' => 'Alice B. C. Davis'
*/

const formatMiddleName = (name) => {
    const nameArray = name.split(' ');
    let result = [];

    if (nameArray.length == 1 || nameArray.length == 2) {
        return name;
    }

    for (let i = 0; i < nameArray.length; i++){
        if (i == 0 || i == nameArray.length - 1) {
            result.push(nameArray[i])
        } else {
            result.push(` ${nameArray[i][0].toUpperCase()}.`);
        }
    }
    return result.join('');
}


// const middleName = name => name.split(' ')
//                                .map((val, idx, arr) => idx == 0 || idx == arr.length - 1 
//                                                         ? val 
//                                                         : val[0] + ".")
//                                .join(' ');


console.log('-----', formatMiddleName('Jack Ryan'));
console.log('-----', formatMiddleName('Lois Mary Lane'));
console.log('-----', formatMiddleName('Alice Betty Catherine Davis'))