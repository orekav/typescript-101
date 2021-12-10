# Pick

Implement the built-in Pick<T, K> generic without using it.

Constructs a type by picking the set of properties K from T

For example

```typescript
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
```

[Exercise](./exercise_1.ts)

<p><a href="https://tsch.js.org/7/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a></p>
