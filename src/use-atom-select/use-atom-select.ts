import { Selector } from "./use-atom-select.types"
import { useAtomValue } from "jotai"
import { useMemo } from "react"

export function useAtomSelect<Props, Result>(selector: Selector<Props, Result>, props: Props) {
  return useAtomValue(useMemo(() => selector(props), [selector, props]))
}
