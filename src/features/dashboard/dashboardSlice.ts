import { createSlice } from "@reduxjs/toolkit";
import dashboardData from "../../data/dashboard.json";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: dashboardData,
  reducers: {},
});

export default dashboardSlice.reducer;
