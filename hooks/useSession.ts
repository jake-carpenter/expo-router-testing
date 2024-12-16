import {createStore} from "zustand/vanilla";
import {create} from "zustand/react";

interface SessionState {
  isAuthenticated: boolean
  login: () => Promise<void>
  logout: () => Promise<void>
}

export const useSession = create<SessionState>((set) => ({
  isAuthenticated: true,
  login: () => {
    set({isAuthenticated: true})
    return Promise.resolve()
  },
  logout: () => {
    set({isAuthenticated: false});
    return Promise.resolve()
  },
}))