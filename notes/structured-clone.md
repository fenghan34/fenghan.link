---
title: Structured cloning API
date: 2021-12-20 12:00:00 +0000
---

最近 HTML 标准新增了 [Structured cloning API](https://html.spec.whatwg.org/multipage/structured-data.html#dom-structuredclone) 用于克隆操作。它是一种结构化克隆，不但支持[多数内置类型](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types)，而且支持循环引用的对象。

> `structuredClone(value)`  
> `structuredClone(value, { transfer })`

```js
// 复制循环引用的对象
const original = { name: 'structuredClone' }
original.itself = original

const clone = structuredClone(original)

console.log(clone === original) // false
console.log(clone.itself === clone) // true
console.log(clone.itself === original.itself) // false
```

其次，Structured cloning API 还支持[部分引用类型](https://developer.mozilla.org/en-US/docs/Glossary/Transferable_objects#supported_objects)的值传递（原始对象中属性值传递（非复制）到新对象后，原始对象无法再访问该属性值）。

```js
// 值传递
const original = new Uint8Array(1024)
const transferred = structuredClone(original, { transfer: [original.buffer] })

console.log(transferred.byteLength) // 1024
console.log(transferred[0]) // 1
console.log(original.byteLength) // 0
```

目前只有部分最新的浏览器版本和 node.js 17 以上版本支持。
