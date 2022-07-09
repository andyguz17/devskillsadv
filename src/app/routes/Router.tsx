import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Members from '../pages/Members/Members';
import NotFound from '../pages/NotFound';
import Header from '../shared/Header/Header';
import { fetchMembers } from '../store/members/members.actions';
import { AppDispatch, RootState } from '../store/store';
import Protected from './Protected';

const Router = () => {
  const { isAuth, logout } = useAuth();
  const { error } = useSelector((state: RootState) => state.members);

  useEffect(() => {
    error?.message === 'The token has expired' && logout();
  }, [error]);

  return (
    <>
      <Header />
      <Routes>
        <Route element={<Protected hasAccess={isAuth} redirect="login" />}>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<Members />} />
        </Route>

        <Route element={<Protected hasAccess={!isAuth} redirect="users" />}>
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Router;
