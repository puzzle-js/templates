import {RenderService, placeholder, render} from "@puzzle-js/module";

@RenderService({
  workers: 2
})
class Renderer {
  constructor(){
    this.asset({
      name: 'bundle.js',
      link: 'external-asset-link',
      injectType: 'onLoad'
    });
  }

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
