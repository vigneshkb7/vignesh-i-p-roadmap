const foodsILike = ['gluten-free', 'carb-free', 'flavor-free'];

const foodsAvailable = [{
    name: 'pasta',
    tags: ['delicious', 'has-carbs']
}, {
    name: 'gluten-free-pizza',
    tags: ['gluten-free', 'carb-free']
}, {
    name: 'biryani',
    tags: ['amazing', 'gluten-free']
}, {
    name: 'pizza',
    tags: ['delicious', 'best meal of the year']
}, {
    name: 'rice cakes',
    tags: ['flavor-free']
    }];

const isAvailable = (foodArray, condition) => {
    return foodArray.some(arr => condition.indexOf(arr)>0);
}


const result = foodsAvailable.filter(food => isAvailable(food.tags, foodsILike));


console.log('----->',result)