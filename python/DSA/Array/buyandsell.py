class Solution:
    def maxProfit(prices) -> int:
        maxPrice = 0
        for i in range(len(prices)-1):
            sellingPrice = max(prices[i:])
            profit = sellingPrice - prices[i]
            if(profit > maxPrice):
                maxPrice = profit
        return maxPrice


print(Solution.maxProfit([1,2,3,4]))
