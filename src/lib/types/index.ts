// Global shared types
// Add project-wide interfaces and type aliases here.

export type Maybe<T> = T | null | undefined

export type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}
