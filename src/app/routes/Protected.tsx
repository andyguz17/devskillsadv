import { Navigate, Outlet } from 'react-router-dom';

interface IProtectedProps {
  hasAccess: boolean;
  redirect: string;
}

const Protected = ({ hasAccess, redirect }: IProtectedProps): JSX.Element => {
  return hasAccess ? <Outlet /> : <Navigate to={redirect} />;
};

export default Protected;
