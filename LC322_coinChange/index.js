function coinChange(coins, amount) {
  let dbMainCoins = new Array(amount + 1).fill(Infinity);
  dbMainCoins[0] = 0;

  for (let i = 0; i < dbMainCoins.length; i++) {
    for (let j = 0; j < coins.length; j++) {
      const coinValue = coins[j];
      if (coinValue <= i) {
        dbMainCoins[i] = Math.min(
          dbMainCoins[i - coinValue] + 1,
          dbMainCoins[i]
        );
      }
    }
  }

  const answer = dbMainCoins[dbMainCoins.length - 1];
  return answer === Infinity ? -1 : answer;
}

module.exports = coinChange;
