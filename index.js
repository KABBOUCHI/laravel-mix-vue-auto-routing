const mix = require('laravel-mix');
const path = require('path');

mix.extend('vueAutoRouting', new class {

    register(opts = {}) {
        this.config = Object.assign({

            pages: 'resources/js/pages',

            importPrefix: '@/pages/',

            dynamicImport: false,

            nested: false

        }, opts);
    }

    dependencies() {
        return ['vue-auto-routing'];
    }

    webpackPlugins() {
        const VueAutoRoutingPlugin = require('vue-auto-routing/lib/webpack-plugin');
        return new VueAutoRoutingPlugin(this.config);
    }

    webpackConfig(webpackConfig) {
        if (!webpackConfig.resolve.alias['@'])
            webpackConfig.resolve.alias['@'] = path.resolve(__dirname, './../../resources/js');
    }
});