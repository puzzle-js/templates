/**
 * Renderers are designed to be in separate folder to provide thread and clustering support
 */

class Renderer {
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
