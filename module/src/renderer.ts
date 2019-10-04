import {RenderService, placeholder, render} from "@puzzle-js/module";

@RenderService()
class Renderer {

  @render()
  render(data) {
    const {name} = data;
    return {
      main: name
    }
  }

  @placeholder()
  placeholder(data) {
    return `placeholder ${data}`;
  }
}

export {
  Renderer
}
