const likes = (likeArr) => {
    let result = '';

    if (likeArr.length === 0) {
        result = 'no one likes this';
    } else if (likeArr.length === 1) {
        result = `${likeArr[0]} likes this`;
    } else if (likeArr.length <= 3) {
        result = `${likeArr[0]}, ${likeArr[1]} and ${likeArr[2]} like this`
    } else {
        const rem = likeArr.slice(2);
        result = `${likeArr[0]}, ${likeArr[1]} and ${rem.length}  others like this`
    } 

    return result;
}


console.log('----->',likes(['vignesh','ram','vishnu','karthik']))