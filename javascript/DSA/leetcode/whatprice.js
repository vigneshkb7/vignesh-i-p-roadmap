const whatprice = (value, dis) => {
    dis = dis / 100;
    const org = value / (1 - dis);
    return Number(org).toPrecision(2)
}

whatprice(75, 25)

whatprice(699,10)