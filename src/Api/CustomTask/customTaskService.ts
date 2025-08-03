import axios from "axios";
import { ParentService } from "../parentService";

class CustomTaskService extends ParentService {
  async CreateData() {
    try {
      const response = await axios.post(
        "http://localhost:3001/custom-task/create-custom-task"
      );

      return response.data;
    } catch (err) {
      throw new Error(err as string);
    }
  }
  async getData(_?: any, thunkApi?: any) {
    try {
      const response = await axios.get(
        "http://localhost:3001/custom-task/get-custom-task"
      );

      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }

  async DeleteData(customTask_id?: number, thunkApi?: any) {
    try {
      const response = await axios.delete(
        `http://localhost:3001/custom-task/delete-custom-task/${customTask_id}`
      );

      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
}

export const customTaskService = new CustomTaskService();
