const style = (notes) => {
  return notes.sort().slice(1, -1).reduce((total, note) => total + note)
}

module.exports = style
