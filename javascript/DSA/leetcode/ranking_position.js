const data = [{
    name: "john",
    points: 10
},
{
    name: "john",
    points: 15
}, {
    name: "john",
    points: 16
}, {
    name: "john",
    points: 10
}, {
    name: "john",
    points: 9
}];

const ranking = (data) => {
    const sorted = data.sort((a, b) => b.points - a.points);
    for (let i = 0; i < sorted.length; i++){
        if (i === 0) {
            sorted[0].rank = i+1;
            continue;
        }
        if (sorted[i].points === sorted[i-1].points) {
            sorted[i].rank = sorted[i - 1].rank
        }else{
            sorted[i].rank = i+1;
        }
    }

    console.log(sorted);
}

ranking(data)