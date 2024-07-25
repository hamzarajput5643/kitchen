const Dotenv = require('dotenv-webpack');

module.exports = {
    // other configurations...
    plugins: [
        new Dotenv(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
    ]
};