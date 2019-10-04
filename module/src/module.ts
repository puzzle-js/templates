import Module from "@puzzle-js/module";

import {Api} from "@puzzle-js/core/dist/api";
import {Renderer} from "./renderer";
import {Data} from "./data";


const module = new Module();

module.bootstrap([
  Api,
  Renderer,
  Data
]);

export = module;