import { $MEMBERS_API } from '../../global/env';
import { IMember } from '../members/members.model';

export const getMembers = async () => {
  const token = JSON.parse(localStorage.getItem('token') ?? '');

  const response = await fetch($MEMBERS_API, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status !== 200) {
    throw new Error((await response.json()).message);
  }

  return response.json();
};

export const postMember = async (member: IMember) => {
  const token = JSON.parse(localStorage.getItem('token') ?? '');
  const response = await fetch($MEMBERS_API, {
    method: 'POST',
    body: JSON.stringify(member),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status !== 200) {
    throw new Error((await response.json()).message);
  }

  return response.json();
};
