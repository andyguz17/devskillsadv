import { createSlice } from '@reduxjs/toolkit';
import { createMember, fetchMembers } from './members.actions';
import { IMembersState } from './members.model';

const initialState: IMembersState = {
  members: [],
  loading: false,
  error: undefined,
};

export const membersSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchMembers.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchMembers.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
    builder.addCase(fetchMembers.fulfilled, (state, action) => {
      state.members = action.payload;
      state.error = undefined;
      state.loading = false;
    });
    builder.addCase(createMember.pending, state => {
      state.loading = true;
    });
    builder.addCase(createMember.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
    builder.addCase(createMember.fulfilled, (state, action) => {
      state.members = [...state.members, action.payload];
      state.error = undefined;
      state.loading = false;
    });
  },
});

export default membersSlice.reducer;
