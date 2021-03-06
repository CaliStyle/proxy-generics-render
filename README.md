# proxy-generics-render

[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

Proxy Generic Render Service with Markdown-It.
Converts markdown document with YAML to object with HTML and Metadata.


Looking for [Proxy Engine?](https://github.com/calistyle/trailpack-proxy-engine)
Looking for [Proxy Generics?](https://github.com/calistyle/trailpack-proxy-generics)

## Install

```sh
$ npm install --save proxy-generics-render
```

## Configure

```js
// config/proxyGenerics.js
module.exports = {
  // make the key render, alternatively make the key render_service to be the default render service
  render_service: {
    adapter: require('proxy-generic-render'),
    options: {
       // Must always be set to true
       html: true
    },
    plugins: [
     // Example Plugin (markdown-it-meta is required and already installed)
     // {
     //   plugin: require('markdown-it-meta'),
     //   options: {}
     // }
    ]
  }
}
```

## Use
Create a markdown document

document.md
```
---
title: Hello World!
keywords: render service
runs: 0
score: 0.0
demographics:
 - {name: 'unknown'}
---
# Hello world!
```

```js
 const document = fs.readFileSync('document.md', 'utf8')
 
 RenderGenericService.render(document)
  .then(doc => {
    // do something with doc
  })
  .catch(err => {
    // do something with error
  })
```

[npm-image]: https://img.shields.io/npm/v/proxy-generics-render.svg?style=flat-square
[npm-url]: https://npmjs.org/package/proxy-generics-render
[ci-image]: https://img.shields.io/circleci/project/github/CaliStyle/proxy-generics-render/master.svg
[ci-url]: https://circleci.com/gh/CaliStyle/proxy-generics-render/tree/master
[daviddm-image]: http://img.shields.io/david//trailpack-proxy-generics-render.svg?style=flat-square
[daviddm-url]: https://david-dm.org/CaliStyle/proxy-generics-render
[codeclimate-image]: https://img.shields.io/codeclimate/github/CaliStyle/proxy-generics-render.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/CaliStyle/proxy-generics-render

