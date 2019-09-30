class Api {
  constructor(container) {

  }

  moduleName(request, response){
    response.end('###module_name###');
  }
}


module.exports = (container) => new Api(container);
