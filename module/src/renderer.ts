import {render, placeholder, FragmentRenderer} from "@puzzle-js/module";

@FragmentRenderer()
class Renderer {
  @render
  render(data) {
    const {name} = data;
    return {
      main: name
    }
  }

  @placeholder
  placeholder(data) {
    return `placeholder ${data}`;
  }
}

export {
  Renderer
}
