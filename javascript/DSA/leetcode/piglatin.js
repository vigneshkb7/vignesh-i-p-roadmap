const piglatin = (str) => 
{
    const arr = str.split(' ');
    return arr.map((word) => {
        return word.match(/[A-z]/i) ? `${word.substr(1)}${word.substr(0, 1)}ay` : word
    }).join(' ');
}



console.log('---->', piglatin('Pig latin is cool'))
console.log('---->',piglatin('Hello world !'))