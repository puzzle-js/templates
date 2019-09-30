class Module {
  constructor(container) {

  }

  placeholder(request) {
    return 'placeholder';
  }

  content(data) {
    const {name} = data;
    return {
      main: name
    }
  }

  data(request) {
    return {
      data: {
        name: '###module_name###'
      }
    }
  }
}


module.exports = (container) => new Module(container);
