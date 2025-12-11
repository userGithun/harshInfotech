import { createSlice } from "@reduxjs/toolkit";
import { getAppointment } from "../../action/AppointmentAction/AppointmentAction";


const initialState = {
  appointment: null,
  loading: false,
  error: null,
};

const appointmentSlice = createSlice({
  name: "appointment",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getAppointment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAppointment.fulfilled, (state, action) => {
        state.loading = false;
        state.appointment = action.payload.data;
 
      })
      .addCase(getAppointment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default appointmentSlice.reducer;
