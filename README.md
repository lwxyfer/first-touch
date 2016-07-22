# recon

one click to config react development environment

quick start for developing React.

how about http://standardjs.com/

## what we get

dev:

- webpack
 - devServer
 - uglifyJsPlugin
 - CommonsChunkPlugin
- babel
- eslint

dependencies:

- react
- react-router
- react-dom

todo:

- immutable.js
- Redux
- dev vs production

### babel & webpack：

```
npm i webpack webpack-dev-server babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev
```

config babel presets:
```
// .babelrc
{
    "presets": [
        "es2015",
        "react"
    ]
}
```

#### webpack-dev-server

add this to webpack.config.js
```
devServer: {
    inline: true,
    contentBase: './app',
    port: 8100
}
```

### react:
```
npm i react react-dom react-router --save
```

### Lingting:

- linter ： atom plugin
- linter-eslint ： atom-plugin
- eslint
- airbnb style guides

```
npm install --save-dev eslint babel-eslint

// config .eslintrc.js
{
   "parser": "babel-eslint",
    "rules": {
      ...
    }
  }
```
just can be used in command line.

- AtomLinter :  atom plugin. I prefer this to automate linting.

### JSX support

atom & sublime both have plugin.

- atom:https://atom.io/packages/language-babel
- sublime:https://github.com/babel/babel-sublime

### strip-loader

Working with different config files for production vs development

## atom-plugins

代码静态检查和格式化，插件与配置相互缠绕，导致的问题，还有router语法的不同。

- atom-beautify
- react
- language-babel
- linter - jshint  代码静态检查
- ESlint

## todo

确定开发环境

Unix

$ BABEL_ENV=production [COMMAND]
$ NODE_ENV=production [COMMAND]
Windows

$ SET BABEL_ENV=production
$ [COMMAND]


## reference

[babel-handbook](https://github.com/thejameskyle/babel-handbook/blob/master/translations/zh-Hans/user-handbook.md#toc-configuring-babel)
