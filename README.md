# webpack-koa-ts

> all in ts

使用ts-node启动koa2开发脚手架

``` 这个项目重点在于 热加载 和All In TypeScript。```

### 1. 为什么后端代码要热加载？
为了方便使用webpack中间件打包前端代码，这样不用重启后端服务就不用重新编译前端代码，重新编译是很耗时的。后续使用时，流程大概是这样的
```
start-dev.ts -> server端的webpack -> server代码 -> webpack中间件 -> 前端代码
```
这样能保证开发时只需要一个入口来启动，前后端都能热加载。

### 2. 实现热加载的关键点
* webpack配置mode: 'development'，为了NamedModulesPlugin插件
* webpack配置entry: 'webpack/hot/signal'
* 将'webpack/hot/signal'打包进代码：nodeExternals({whitelist: ['webpack/hot/signal']})
* 使用HotModuleReplacementPlugin
* start-server-webpack-plugin配置signal: true
* babel配置"modules": false
* tsconfig.json配置"module": "es2015"
* 使用单独的文件来启动server，监听热加载的文件，src/server.ts

### 3. tsconfig
* ts-node运行脚本的tsconfig和ts-loader打包代码时的tsconfig不同。
* ts-node用的config直接将代码用tsc编译后在node运行，在node 8.x以下的版本中不能使用import，所以module要用commonjs。
* webpack打包的代码要热加载，需要用es module，这里我们使用es2015。


## Build Setup

``` bash
# install dependencies
npm install (yarn)

# serve with hot reload at localhost:8080
npm run dev (yarn dev)

# build for production with minification
npm run build (yarn build)
```

``` bash
webpack-koa-ts@1.0.0
├── @types/koa@2.0.46
├── @types/node@7.0.70
├── @types/webpack@4.4.11
├── @types/webpack-env@1.13.6
├── @types/webpack-node-externals@1.6.3
├── babel-core@6.26.3
├── babel-loader@7.1.5
├── babel-preset-env@1.7.0
├── koa@2.5.2
├── node-pre-gyp@0.10.3 extraneous
├── start-server-webpack-plugin@2.2.5
├── ts-loader@4.5.0
├── ts-node@5.0.1
├── typescript@2.9.2
├── webpack@4.17.2
├── webpack-cli@2.1.5
└── webpack-node-externals@1.7.2
```