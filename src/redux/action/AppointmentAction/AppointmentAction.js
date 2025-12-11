import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../api/api";
import axios from "axios";

export const getAppointment = createAsyncThunk(
  "appointment/getAppointment",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/appointment`, data, {
        headers: { "Content-Type": "application/json" },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
