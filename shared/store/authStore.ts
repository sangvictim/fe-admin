"use client";

import { create } from 'zustand'
import { AuthBaseProps, UserAuth } from '../types'
import Cookies from 'js-cookie'

const initialState: UserAuth = {
  user: {
    id: undefined,
    name: undefined,
    email: undefined,
    avatar: undefined,
  }
}

const useAuthStore = create<AuthBaseProps>()((set, get) => ({
  ...initialState,
  setAuth: async (userAuth: UserAuth) => {
    set({ ...initialState, ...userAuth }, true);
    Cookies.set('authToken', String(userAuth.token), {
      sameSite: 'strict',
      secure: false,
      expires: 30
    })
  },
  logout: async () => {
    set({
      user: undefined,
      isLogedIn: false,
      token: undefined
    }, true);
    Cookies.remove('authToken');
  },
})
)

export default useAuthStore