---
title: 联合类型转交叉类型
date: 2022-01-16 12:00:00 +0000
---

在 TypeScript 中，可以利用 [Distributive conditional types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#distributive-conditional-types) 和 `infer` 将联合类型转换为交叉类型。

```ts
type UnionToIntersection<T> = (T extends any ? (x: T) => void : never) extends (
  x: infer U
) => void
  ? U
  : never

type A = { a: string }
type B = { b: number }

type Res = UnionToIntersection<A | B> // A & B
```

具体来说，当向 `UnionToIntersection<T>` 传入 `A | B` 时：

首先，根据 Distributive conditional types 规则，`T extends any ? (x: T) => void : never` 会被处理成 `A extends any ? (x: T) => void : never | B extends any ? (x: T) => void : never`，即为 `(x: A) => void | (x: B) => void`。

其次，此时 `A` 和 `B` 均在逆变位置（函数参数）上，结合[同一类型变量在逆变位置的多个候选类型将会被推断为交叉类型](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#type-inference-in-conditional-types)可以推断出 `U` 为 `A & B`。
