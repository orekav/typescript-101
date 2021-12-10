/* _____________ Your Code Here _____________ */

type MyPick<T, K> = any


/* _____________ Test Cases _____________ */
import { Equal, Expect } from './utils'

type cases = [
  Expect<Equal<Expected1, Pick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}