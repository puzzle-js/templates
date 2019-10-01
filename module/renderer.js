/**
 * Renderers are designed to be in separate folder to provide thread and clustering support
 * .render method is called with the data returned from data.js (data method)
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

module.exports = Renderer;
