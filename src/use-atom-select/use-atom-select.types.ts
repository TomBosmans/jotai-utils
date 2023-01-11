import { Atom } from "jotai"

export type Selector<Props, Result> = (props: Props) => Atom<Result>
