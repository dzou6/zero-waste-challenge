const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);  // change importing css to less
    config = rewireLess.withLoaderOptions({
        javascriptEnabled: true,
        modifyVars: { 
            // modify ant design theme here
            "@primary-color": "#18bc9c",
            "@font-family": `'M PLUS Rounded 1c', sans-serif !important`,
        },
    })(config, env);

    return config;
};
