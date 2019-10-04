import {ApiHandler} from "@puzzle-js/module";

@ApiService()
class Api {
  constructor(container) {

  }

  @get('/get-module-name')
  @middleware()
  moduleName(request, response){
    response.end('###module_name###');
  }
}


export {
  Api
}
