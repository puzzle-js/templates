/**
 * Renderers are designed to be in separate folder to provide thread and clustering support
 */

const {RenderWorker} = require('@puzzle-js/core');

class Renderer extends RenderWorker {
  render(data){
    const {name} = data;
    return {
      main: name
    }
  }

  placeholder(data){
    return `placeholder ${data}`;
  }
}

module.exports = () => new Renderer();
