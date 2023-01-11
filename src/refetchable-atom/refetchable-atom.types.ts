import { Getter } from "jotai"

export declare type Fn<Value> = (
  get: Getter,
  options: {
    signal: AbortSignal
  },
) => Value
