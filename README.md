# Laravel Mix - Vue Auto Routing

This extension generate Vue Router routing automatically.

## Usage

First, install the extension.

```
npm install laravel-mix-vue-auto-routing --save-dev
```

Then, require it within your `webpack.mix.js` file, like so:

```js
let mix = require('laravel-mix');

require('laravel-mix-vue-auto-routing');

mix
    .js('resources/js/app.js', 'public/js')
    .vueAutoRouting();
```

```js
// /resources/js/router/index.js
import routes from 'vue-auto-routing'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes,
    mode: 'history',
    base: '/',
})
```

```
resources/
    js/
    └── pages/
        ├── index.vue
        ├── users.vue
        └── users/
            └── _id.vue
```