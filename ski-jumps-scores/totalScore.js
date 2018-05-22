const style = require('./style')
const distance = require('./distance')

const totalScore = (size, length, k, notes, wind, gate) => {
  const total = style(notes) + distance(size, length, k) + wind + gate;
  return Math.round(total * 10) / 10
}

module.exports = totalScore;

console.log(totalScore('large', 123, 150, [13,14,15,16,13], 23, -42))
