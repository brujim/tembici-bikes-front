import { create } from 'zustand'

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

const usePosition = create<PositionStore>((set) => ({
  ...initialState,
  setPosition: (position) => set({ ...position })
}))

export default usePosition
