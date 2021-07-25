function exist(board, word) {
  //   let found = false;

  //   for (let row = 0; row < board.length; row++) {
  //     for (let col = 0; col < board.length; col++) {
  //       if (board[row][col] === word[0]) {
  //         dfs(row, col, 0, word);
  //       }
  //     }
  //   }

  //   function dfs(row, col, count, word) {
  //     if (count === word.length) {
  //       found = true;
  //       return;
  //     }
  //     if (
  //       row < 0 ||
  //       row >= board.length ||
  //       col < 0 ||
  //       col >= board[0].length ||
  //       board[row][col] !== word[count]
  //     ) {
  //       return;
  //     }

  //     let temp = board[row][col];
  //     board[row][col] = "";

  //     dfs(row + 1, col, count + 1, word);
  //     dfs(row - 1, col, count + 1, word);
  //     dfs(row, col + 1, count + 1, word);
  //     dfs(row, col - 1, count + 1, word);

  //     board[row][col] = temp;
  //   }

  //   return found;

  var len1 = board.length;
  var len2 = (board[0] || []).length;
  var len3 = word.length;

  if (!len1 || !len2 || !len3) return false;

  for (var i = 0; i < len1; i++) {
    for (var j = 0; j < len2; j++) {
      if (helper(board, word, i, j, 0)) return true;
    }
  }

  return false;
}

var helper = function (board, word, m, n, k) {
  if (k === word.length) return true;
  if (m < 0 || m >= board.length) return false;
  if (n < 0 || n >= board[m].length) return false;
  if (board[m][n] !== word[k]) return false;

  var res = false;
  var char = board[m][n];

  board[m][n] = "#";

  res =
    helper(board, word, m - 1, n, k + 1) ||
    helper(board, word, m + 1, n, k + 1) ||
    helper(board, word, m, n - 1, k + 1) ||
    helper(board, word, m, n + 1, k + 1);

  if (!res) board[m][n] = char;

  return res;
};

module.exports = exist;
