import axios from "axios";

class AuthService {
  async SignUp(
    data?: { userName: string; Email: string; Password: string },
    thunkApi?: any
  ) {
    try {
      const response = await axios.post(
        "http://localhost:3001/auth/signup",
        data
      );

      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }

  async Login(data?: { Email: string; Password: string }, thunkApi?: any) {
    try {
      const response = await axios.post(
        "http://localhost:3001/auth/login",
        data
      );

      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
}

export const authService = new AuthService();
