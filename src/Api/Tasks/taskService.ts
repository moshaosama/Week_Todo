import axios from "axios";
import { ParentService } from "../parentService";

class TaskService extends ParentService {
  async CreateData(
    data?: { task: string; day_id: number; user_id: number },
    thunkApi?: any
  ) {
    try {
      const response = await axios.post(
        "http://localhost:3000/task/create-task",
        {
          task: data?.task,
          user_id: data?.user_id,
          day_id: data?.day_id,
        }
      );
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
  async getData(data?: { user_id: number; day_id: number }, thunkApi?: any) {
    try {
      const response = await axios.get(
        `http://localhost:3000/task/get-task/${data?.user_id}/${data?.day_id}`
      );
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }

  async getTaskById(
    data?: { day_id: number; task_id: number },
    thunkApi?: any
  ) {
    try {
      const response = await axios.get(
        `http://localhost:3000/task/get-task-by-id/${data?.day_id}/${data?.task_id}`
      );
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }

  async EditTask(
    data?: { day_id: number; task_id: number; task: string; index_db: number },
    thunkApi?: any
  ) {
    try {
      const response = await axios.put(
        `http://localhost:3000/task/edit-task/${data?.day_id}/${data?.task_id}`,
        {
          task: data?.task,
          index_db: data?.index_db,
        }
      );
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
}

export const taskService = new TaskService();
