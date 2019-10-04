import {ApiHandler} from "@puzzle-js/module";

@ApiHandler()
class Api {
  constructor(container) {

  }

  moduleName(request, response){
    response.end('###module_name###');
  }
}


export {
  Api
}
