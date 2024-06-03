import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Positions {
  latitude?: number
  longitude?: number
}

interface PositionStore {
  latitude?: number
  longitude?: number
  setPosition: (params: Positions) => void
}

const initialState = {
  latitude: 0,
  longitude: 0
}

// const usePosition = create<PositionStore>((set) => ({
//   ...initialState,
//   setPosition: (position) => set({ ...position })
// }))

const usePosition = create<PositionStore>()(
  persist(
    (set) => ({
      latitude: 0,
      longitude: 0,
      setPosition: (param) => set(() => ({ ...param }))
    }),
    {
      name: 'position-storage'
    }
  )
)

export default usePosition
