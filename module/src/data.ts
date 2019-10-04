import {DataService, data} from "@puzzle-js/module";

@DataService()
class Data {

  @data()
  handler(request) {
    return {
      data: {
        name: '###module_name###'
      }
    }
  }
}


export {
  Data
}
