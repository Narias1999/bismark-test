/**
 * Put currency format to a String
 * @param {String} price 
 */
const formatCurrency = price => price.replace(/(?<!^)\d{3}/g, match => '.' + match)

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
      if (product[key].toLowerCase().search(keyword) !== -1) {
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
