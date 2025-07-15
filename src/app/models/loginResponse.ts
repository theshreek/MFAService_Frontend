export interface LoginResponse {
  id: number,
  username: string,
  email: string,
  accessToken: string,
}

export interface TotpResponse {
  status: string,
}
