# trezam-hiring-test-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### architechture

-public/ index.html
-src/
    -assets/ --only a png
    -components/ --contains all the components imported in views directory
    -router/ --index.js is the routing logic for the app
    -store/ --unused, basically would be for vuex
    -views/ --here are the pages containing components rendered
    -App.vue --render the navbar wich is persistent through out the app
-package.json

