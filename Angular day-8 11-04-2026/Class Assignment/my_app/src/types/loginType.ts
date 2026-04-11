export interface LoginType {
  email: string;
  password: string;
}

export interface LoginResponseType {
  access_token: string;
  refresh_token: string;
}