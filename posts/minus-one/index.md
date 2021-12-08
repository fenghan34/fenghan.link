---
title: Type Challenge | MinusOne
spoiler: How to implement minus-one in Typescript.
date: 2021-10-29 12:00:00 +0000
duration: 5min
---

_Given a number (always positive) as a type. Your type should return the number decreased by one._

You can check this challenge [here](https://github.com/fenghan34/type-challenges/blob/master/questions/2257-medium-minusone/README.md).

```ts
type Zero = MinusOne<1> // 0
type FiftyFour = MinusOne<55> // 54
```

## Solution

There is no doubt that the only way we can get a number type from TypeScript types is obtaining the length of tuple types. Thus, basically, we need to construct a tuple whose length is the number which equals the type param minusd one, and return its length as result in `MinusOne<T>`.

But we can only construct a tuple whose length equals the type param since we couldn't add subtraction to type system. so we use `infer` operator to get the tuple we want and return its length as final result.

How to construct a specific length tuple? It is recursion, simply as flowing:

```ts
type TupleGenerator<
  T extends number,
  U extends unknown[] = []
> = U['length'] extends T ? U : TupleGenerator<T, [...U, unknown]>
```

It worked! but here is the thing, the maximum of type recursion times is 50 in TypeScript, which means it will failed when we pass any number bigger than 50. thus, we have to change our recursion method.

**The point is that we should find out a way to decrease recursion times to a number smaller than 50 in every type statement.**

Let's review the challenge description. As it said, the number we pass to `MinusOne<T>` is always positive, and it's easy to ignore that the number we use is the decimal number. That's the key, we can use this convention to solve this question.

**Solution steps as following:**

- Transform the number to string so that we could iterate through each digit.

  ```ts
  type MinusOne<T extends number> = `${T}`
  ```

- Iterate through each character in `TupleGenerator`.

  ```ts
  type TupleGenerator<T extends string> =
    T extends `${infer FirstDigit}${infer Rest}`
      ? FirstDigit extends ''
        ? T
        : TupleGenerator<Rest>
      : T

  type MinusOne<T extends number> = TupleGenerator<`${T}`>
  ```

- Construct a tuple recursively in `TupleGenerator`. In each loop, return a tuple whose length equals the sum of `A` and `B`.
  `A` is the corresponding number of current string `T`.
  `B` is the number which resulted by the length of last returned tuple multiplied with `10`.

  ```ts
  type BaseDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  type BaseDigitsStrUnion = `${BaseDigits[number]}`

  type ExpandTupleBy10x<T extends any[]> = [
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T
  ]

  type TupleGenerator<
    T extends string,
    U extends any[] = []
  > = T extends `${infer FirstDigit}${infer Rest}`
    ? FirstDigit extends BaseDigitsStrUnion
      ? TupleGenerator<
          Rest,
          [...ExpandTupleBy10x<U>, ...TupleGeneratorHelper<FirstDigit>]
        >
      : U
    : U
  ```

- Simply infer the tuple we want and return its length as final result.

  ```ts
  type MinusOne<T extends number> = TupleGenerator<`${T}`> extends [
    _: unknown,
    ...rest: infer Rest
  ]
    ? Rest['length']
    : 0
  ```

**All the solution code for this challenge as following:**

```ts
type BaseDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
type BaseDigitsStrUnion = `${BaseDigits[number]}`

// returns a tuple which contains specific number (less than 10) of elements
type TupleGeneratorHelper<
  T extends BaseDigitsStrUnion,
  U extends any[] = []
> = BaseDigits[T] extends U['length'] ? U : TupleGeneratorHelper<T, [...U, any]>

// returns a tuple which contains 10x elements of T
type ExpandTupleBy10x<T extends any[]> = [
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T
]

// returns a tuple which contains specific number (any positive number) of elements
type TupleGenerator<
  T extends string,
  U extends any[] = []
> = T extends `${infer FirstDigit}${infer Rest}`
  ? FirstDigit extends BaseDigitsStrUnion
    ? TupleGenerator<
        Rest,
        [
          ...(U extends [] ? U : ExpandTupleBy10x<U>),
          ...TupleGeneratorHelper<FirstDigit>
        ]
      >
    : U
  : U

type MinusOne<T extends number> = TupleGenerator<`${T}`> extends [
  _: unknown,
  ...rest: infer Rest
]
  ? Rest['length']
  : 0
```

**Use JavaScript code to describe this solution:**

```ts
function minusOne(param: number): number {
  function genCorrespondingLengthOfArray(length: number): any[] {
    // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const baseDigits: readonly number[] = Array.from(
      { length: 10 },
      (_: any, i: number) => i
    )

    function generator(lenStr: string, result: any[] = []): any[] {
      const [first, ...rest] = lenStr
      const firstDigit = parseInt(first, 10)

      if (baseDigits.includes(firstDigit)) {
        // if the first character is one of baseDigits elements

        // set the result length to 10x current length
        result.length *= 10
        // set the result length to the sum of current length and the first digit
        result.length += firstDigit

        return generator(rest.join(''), result)
      }

      return result
    }

    return generator(`${length}`)
  }

  // use array destructuring to get the final array
  const [_, ...rest] = genCorrespondingLengthOfArray(param)
  return rest.length
}
```

## Wrapping Up

That's it, even though this solution is not perfect enough since the TypeScript tuple length limitation, which means we would get an error with `Type produces a tuple type that is too large to represent` when we pass a number bigger than `9999`. I believe that TypeScript will support some tools to handle numbers one day.

Thank you for reading through. Please fee free to comment or leave a message to me if you have any question.
