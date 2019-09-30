/**
 * Prepares data for rendering
 */

class Data {
  constructor(container) {

  }

  data(request) {
    return {
      data: {
        name: '###module_name###'
      }
    }
  }
}


module.exports = (container) => new Data(container);
