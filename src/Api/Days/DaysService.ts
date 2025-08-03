import { ParentService } from "../parentService";
import axios from "axios";
class DayService extends ParentService {
  CreateData() {}
  async getData(user_id?: number, thunkApi?: any) {
    try {
      const response = await axios.get(`http://localhost:3001/days/${user_id}`);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
}

export const dayService = new DayService();
