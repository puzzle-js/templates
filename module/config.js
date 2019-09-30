const Puzzle = require("@puzzle-js/core");

module.exports = {
  name: '###module_name###',
  render: {
    static: false,
    placeholder: false,
    url: "/",
    middlewares: []
  },
  assets: [
    {
      name: "module-css",
      fileName: "module.bundle.css",
      type: Puzzle.ENUMS.RESOURCE_TYPE.CSS,
      loadMethod: Puzzle.ENUMS.RESOURCE_LOADING_TYPE.ON_RENDER_START,
      dependent: []
    },
    {
      name: "module-js",
      fileName: "search-autofill.bundle.js",
      type: Puzzle.ENUMS.RESOURCE_TYPE.JS,
      loadMethod: Puzzle.ENUMS.RESOURCE_LOADING_TYPE.ON_PAGE_RENDER,
      dependent: []
    }
  ],
  dependencies: [],
  api: [
    {
      name: "module-api",
      endpoints: [{
        method: Puzzle.ENUMS.HTTP_METHODS.GET,
        path: "/",
        controller: "moduleName",
        middlewares: []
      }]
    }
  ]
};
