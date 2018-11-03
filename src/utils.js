/**
 * Put currency format to a String
 * @param {String} price 
 */
const formatCurrency = price => price.replace(/\B(?=(\d{3})+(?!\d))/g, '.')

/**
 * Filter an array of objects
 * @param {Array} arr 
 * @param {String} keyword 
 */
const filterArray = (arr, keyword) => arr.filter(product => {
  let match = false
  keyword = keyword.toLowerCase()

  // validate if at least one key of the object (less the id), match with the keyword
  for (const key in product) {
    if (key != 'id') {
      const string = `${product[key]}`
      if (string.toLowerCase().search(keyword) !== -1) {
        match = true
        break
      }
    }
  }
  return match
})
export {
  formatCurrency,
  filterArray
}
