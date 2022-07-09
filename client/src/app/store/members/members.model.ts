import { SerializedError } from '@reduxjs/toolkit';

export interface IMembersState {
  members: IMember[];
  loading?: boolean;
  error?: SerializedError;
}

export interface IMember {
  firstName: string;
  lastName: string;
  address: string;
  ssn: string;
}
