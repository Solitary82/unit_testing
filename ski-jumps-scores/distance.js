const distance = (size, length, k) => {
  let base,
      multiplier;

  switch(size) {
    case 'normal':
      base = 60;
      multiplier = 2
      break;
    case 'large':
      base = 60;
      multiplier = 1.8
      break;
    case 'flying':
      base = 120;
      multiplier = 1.2
      break;
  }

  const total = base + (length - k) * multiplier
  return total < 0 ? 0 : total
}

module.exports = distance;
