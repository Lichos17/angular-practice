export interface UserSignUpBody {
  name: string;
  email: string;
  password: string;
  passwordConfirm?: string;
  created_at: string;
  updated_at: string;
}
