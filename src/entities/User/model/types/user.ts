export interface User {
  id: string
  username: string
  avatar?: string
}

export interface userSchema {
  AuthData?: User

  _inited: boolean
}
