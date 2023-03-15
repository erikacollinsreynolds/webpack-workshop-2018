// module.exports = (buttonName) => {
//   return `Button: ${buttonName}`
// };

//module export is the default export

//OR 

// JS docs example
/**
 * 
 * @param {string} buttonName 
 * @returns {Element}
 */

const makeButton = (buttonName) => {
  return `Button: ${buttonName}`
};

module.exports = makeButton;