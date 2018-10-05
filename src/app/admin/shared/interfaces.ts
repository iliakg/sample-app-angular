export interface Error {
  path: string
  message: string
}

export interface Admin {
  _id?: string
  name: string
  email: string
  password?: string
}
