const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

//config to override the ant design less styles
module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);  // change importing css to less
    config = rewireLess.withLoaderOptions({
        javascriptEnabled: true,
        modifyVars: { 
            // modify ant design theme here
            "@primary-color": "#18bc9c",
            "@font-family": `'M PLUS Rounded 1c', sans-serif !important`,
            "layout-header-height": "86px"
        },
    })(config, env);

    return config;
};
