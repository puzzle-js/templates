import {DataProvider} from "@puzzle-js/module";

@DataProvider()
class Data {
  constructor(container) {

  }

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
