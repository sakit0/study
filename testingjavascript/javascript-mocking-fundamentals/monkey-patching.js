const assert = require("assert");
const thumbWar = require("./thumb-war");
const utils = require("./utils");

// 一度元の状態を格納
const originalGetWinner = utils.getWinner;

// getWinnerをモック
utils.getWinner = jest.fn((p1, p2) => p1);

const winner = thumbWar("Kent C. Dodds", "Ken Wheeler");
assert.strictEqual(winner, "Kent C. Dodds");

expect(winner).toBe("Kent C. Dodds");
expect(utils.getWinner).toHaveBeenCalledTimes(2);
expect(utils.getWinner).toHaveBeenCalledWith("Kent C. Dodds", "Ken Wheeler");
expect(utils.getWinner).toHaveBeenNthCalledWith(
  1,
  "Kent C. Dodds",
  "Ken Wheeler"
);
expect(utils.getWinner).toHaveBeenNthCalledWith(
  2,
  "Kent C. Dodds",
  "Ken Wheeler"
);

// モックを元の状態に戻して影響範囲を狭める
utils.getWinner = originalGetWinner;
