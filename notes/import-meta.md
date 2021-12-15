---
title: import.meta
date: 2021-12-10 12:00:00 +0000
---

我在排查 bug 过程中，偶然间在一个依赖包源码中发现了这段代码：

```js
const worker = new Worker(new URL('./xxx.js', import.meta.url))
```

脑中检索了一遍，完全没有印象……于是阅读了相关的文档。

原来 `import.meta` 是一个由 `null` 作为原型生成的对象，包含该 JavaScript 模块的上下文信息。它有一个非常有用的属性 `url`，表示该 JavaScript 模块的引用路径，可以携带 query parameters 或者 hash。

```html
<script type="module">
  import './a.js?id=1'
  import './b.js#1'
</script>
```

```js
// a.js
console.log(Object.getPrototypeOf(import.meta)) // null

console.log(import.meta) // { url: "file:///home/user/a.js?id=1" }

// b.js
console.log(import.meta) // { url: "file:///home/user/b.js#1" }
```

node 环境也适用，前提是必须支持 JavaScript 模块语法。
