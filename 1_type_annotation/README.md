# Type Annotations


## Data types

- string
    - "hello world"
- number
  - 1
  - 1.23
- boolean
  - true
  - false
- null
- undefined
- enum
  - ```typescript
    enum Status4xx {
      BadRequest = 400,
      Unauthorized,
      Forbidden = 403,
      NotFound,
    }
    ```
- void
  - used when functions do not return any usable value
- unknown
- any
  - recommended when migrating existing project from javascript to typescript
- never
  - ausence of value
  - 
- and more:
  - bigint
  - Map / WeakMap
  - Set / WeakSet