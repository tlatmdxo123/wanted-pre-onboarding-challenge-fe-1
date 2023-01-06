export interface AuthInfo {
  email: string
  password: string
}

export interface AuthSuccessResponse {
  message: string
  token: string
}
