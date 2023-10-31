export interface AuthBaseProps extends AuthAction {
  user: {
    id?: string
    name?: string
    email?: string
    avatar?: string
  },
  token?: string
  isLogedIn?: boolean

}

export interface AuthAction {
  setAuth: (value: UserAuth) => void
  logout: () => any
}

export interface UserAuth extends Omit<AuthBaseProps, "logout" | "setAuth"> { }

export interface LoginType {
  email: string
  password: string
}
