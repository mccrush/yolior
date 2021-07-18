export default (array, sortUp, sortBy) => {
  return array.sort((a, b) => {
    if (sortUp === 'asc') {
      if (sortBy === 'position') {
        return a.position - b.position
      } else if (sortBy === 'title') {
        return a.title[0].charCodeAt(0) - b.title[0].charCodeAt(0)
      } else if (sortBy === 'price') {
        return a.price - b.price
      }
    } else {
      if (sortBy === 'position') {
        return b.position - a.position
      } else if (sortBy === 'title') {
        return b.title[0].charCodeAt(0) - a.title[0].charCodeAt(0)
      } else if (sortBy === 'price') {
        return b.price - a.price
      }
    }
  })
}