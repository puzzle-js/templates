import Module from "@puzzle-js/module";

import {Api} from "./api";
import {Renderer} from "./renderer";
import {Data} from "./data";

@Module({
  name: '###module_name###',
  bootstrap: [
    Api,
    Renderer,
    Data
  ]
})
export class AppModule {}
