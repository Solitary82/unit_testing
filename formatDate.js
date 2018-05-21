function checkZero(number, value) {
  return number ? `${number}${value} ` : ''
}

const formatDate = seconds => {
  return !seconds ? '0s' : `${checkZero(Math.floor(seconds / 3600), 'h')}${checkZero(Math.floor((seconds / 60) % 60), 'm')}${checkZero(seconds % 60, 's')}`.trim();
}

module.exports = formatDate;
