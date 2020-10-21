var a = [{
    'id': '1',
    'name': 'a1'
}, {
    'id': '2',
    'name': 'a2'
}, {
    'id': '3',
    'name': 'a3'
},
{
    'id': '4',
    'name': 'a4'
}];
var b = [{
    'id': '2',
    'name': 'a2'
}, {
    'id': '3',
    'name': 'a3'
    }];

const containsObject = (obj, arr) => {
  return arr.find(a => obj.id === a.id);
}



const resultant = (a, b) => {
    const res = a.filter(x => !containsObject(x,b));
    return res;
}


console.log('-------->',resultant(a,b))

