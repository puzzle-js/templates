class Fragment {
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


module.exports = (container) => new Fragment(container);
