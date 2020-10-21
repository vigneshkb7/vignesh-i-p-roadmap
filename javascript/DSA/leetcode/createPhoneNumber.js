/**
 * 
 * @param {*} phone [0,1,2,3,4,5,6,7,8,9] of length 10
 * @returns (012) 345-6789
 */




const phoneNumber = (phone) => {
    let phoneNumber = "";
    if (Array.isArray(phone) && phone.every(p => p > -1 && p < 10) && phone.length === 10) {
        const areacode = phone.slice(0, 3).join('');
        const firstPart = phone.slice(3, 6).join('');
        const secondPart = phone.slice(6).join('');
        phoneNumber = `(${areacode}) ${firstPart}-${secondPart}`;
    }

    return phoneNumber;
}

console.log('--->phone number',phoneNumber([0,1,2,3,4,5,6,7,8,9]))