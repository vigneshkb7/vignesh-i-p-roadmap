// input [7,1,5,3,6,4]
// o/p 5

var maxProfit = function (prices) {
  let buyPrice = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (buyPrice > prices[i]) {
      buyPrice = prices[i];
    }

    profit = Math.max(profit, prices[i] - buyPrice);
  }

  return profit;
};

let res = maxProfit([7, 1, 5, 3, 6, 4]);
console.log(res);
