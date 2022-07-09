import { useEffect } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMembers } from '../../store/members/members.actions';
import { AppDispatch, RootState } from '../../store/store';

import './Members.scss';

const Members = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { members, loading } = useSelector((state: RootState) => state.members);

  useEffect(() => {
    dispatch(fetchMembers());
  }, [dispatch]);

  const { reset } = useIdleTimer({
    onIdle: () => {
      dispatch(fetchMembers());
      reset();
    },
    timeout: 120000,
  });

  return (
    <>
      {loading ? (
        <>Loading</>
      ) : (
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>SSN</th>
            </tr>
          </thead>

          {members.map(member => (
            <tbody key={member.ssn}>
              <tr>
                <td>{member.firstName}</td>
                <td>{member.lastName}</td>
                <td>{member.address}</td>
                <td>{member.ssn}</td>
              </tr>
            </tbody>
          ))}
        </table>
      )}
    </>
  );
};

export default Members;
