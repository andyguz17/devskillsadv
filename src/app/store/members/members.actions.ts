import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMembers, postMember } from '../api/memebers';
import { IMember } from './members.model';

export const fetchMembers = createAsyncThunk(
  'members/fetchMembers',
  async () => {
    return await getMembers();
  }
);

export const createMember = createAsyncThunk(
  'members/postMember',
  async (member: IMember) => {
    return await postMember(member);
  }
);
