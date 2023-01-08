# study-npm-js-rollup

针对纯 ts 的 npm 包脚手架模板：

1.使用 rollup 打包

2.使用 typescript 开发

3.使用 eslint 代码校验(使用airbnb-base+plugin:promise/recommended规则)

4.使用 prettier 代码格式化

5.使用babel转换es6代码

6.配置 husky 规范 commit

lint 和 test 都通过之后才能进行 commit，另外规范 commit message 的格式，要求更有意义的 commit message 才能进行 commit

install

npm

```
npm i study-npm-js-rollup -D
```
yarn

```
yarn add study-npm-js-rollup -D
```

CSDN
```
<script src="https://cdn.jsdelivr.net/npm/study-npm-js-rollup@版本号/dist/study-npm-js-rollup.umd.js"></script>"
window.study_npm_js_rollup.packageFunction
```
package.json

```
 //使用commonJs,使用require("study-npm-js-rollup")引入包使用
  "main": "dist/study-npm-js-rollup.cjs.js",
  //browser 会在https://www.jsdelivr.com/里面显示浏览器使用umd.js文件
  "browser":"dist/study-npm-js-rollup.umd.js",
  //typescript项目必须要加,否则引入npm包使用会报错
  "types": "dist/index.d.ts",
```