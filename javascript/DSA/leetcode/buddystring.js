const mapObjects = obj => {
    const objArr = obj.split('');

    const result = {};

    objArr.forEach(element => {
        if (result[element]) {
            result[element] +=1

        } else {
            result[element] =1
        }
    });
    

    return result;
}

const buddyString = str => {
    const resultant = Object.entries(mapObjects(str)).sort(([, a], [, b]) => a - b).reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
    return Object.keys(resultant);

}


console.log('-------',buddyString('cbacdcbc'));


