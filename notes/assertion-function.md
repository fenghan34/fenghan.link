---
title: Assertion Function
date: 2021-12-29 12:00:00 +0000
---

TypeScript 3.7 版本发布了一个新概念——[断言函数](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions)，它的作用与 Node.js 中的 `assert()` 断言函数类似。

为此，TypeScript 引入了一个新的断言签名 `asserts` 以标记一个函数是断言函数。

```ts
function assert(condition: any): asserts condition {
  if (!condition) {
    throw new Error()
  }
}
```

`asserts condition` 可以理解为如果 `assert()` 函数执行完毕并返回，此时 `condition` 参数必须是真值，否则函数将抛出错误。

TypeScript 运行时能够利用断言函数对变量类型进行收窄，相比于其他收窄方式，断言函数更具有表达性。

```ts
function foo(x: string | number) {
  assert(typeof x === 'string')
  x.toLocaleUpperCase() // x 被收窄为 string 类型

  assert(typeof x === 'number')
  x // 无法再收窄类型，此时 x 为 never 类型
}
```

结合 `asserts` 和 `is` 标记可以更清晰地收窄某个变量为指定类型。

```ts
function assertIsNumber(val: any): asserts val is number {
  if (typeof val !== 'number') {
    throw new Error()
  }
}

function foo(x: string | number) {
  assertIsNumber(x)

  x // x 被收窄为 number 类型
  x.toUpperCase() // error， 类型 “number” 上不存在属性 “toUpperCase”
}
```

`asserts val is number` 表示如果 `val` 不是 `number` 类型，函数将抛出错误。

根据这个特性，我们可以写出一些复杂的类型判断。例如，判断某个变量是否为 `null` 和 `undefined` 类型，如果不是就收窄其类型，如果是就抛出错误。

```ts
function assertIsDefined<T>(
  val: T,
  msg?: string
): asserts val is NonNullable<T> {
  if (typeof val === 'undefined' || val === null) {
    throw new Error(msg)
  }
}

function bar(x?: string | null) {
  assertIsDefined(x, 'Param x should not be null or undefined.')

  x.toUpperCase() // x 被收窄为 string 类型
}

bar() // Param x should not be null or undefined.
```
