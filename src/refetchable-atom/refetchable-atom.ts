import { Fn } from "./refetchable-atom.types"
import { abortableAtom } from "jotai/utils"
import { atom } from "jotai"

export const refetchableAtom = <Value>(fn: Fn<Promise<Value>>) => {
  const toggleAtom = atom(true)

  return abortableAtom(
    async (get, options): Promise<Value> => {
      get(toggleAtom)
      return await fn(get, options)
    },

    (get, set) => {
      set(toggleAtom, !get(toggleAtom))
    },
  )
}
