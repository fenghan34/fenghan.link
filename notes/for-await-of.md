---
title: for await...of
date: 2021-12-26 12:00:00 +0000
---

```js
const promises = [
  () => Promise.resolve(0),
  Promise.resolve(1),
  Promise.reject(2),
  Promise.resolve(3),
]
```

```js
;(async function () {
  try {
    for await (let v of promises) {
      if (typeof v === 'function') {
        v = await v()
      }

      console.log(v)
    }
  } catch (e) {
    console.log('caught', e)
  }
})()
// 0
// 1
// caught 2
```

该段代码等价于以下代码：

```js
;(async function () {
  try {
    for (let v of promises) {
      if (typeof v === 'function') {
        v = v()
      }

      console.log(await v)
    }
  } catch (e) {
    console.log('caught', e)
  }
})()
```

与 `for...of` 的不同的是，`for await...of` 创建的循环不仅可以遍历实现同步迭代协议的对象，还可以用于实现异步迭代协议的对象。
