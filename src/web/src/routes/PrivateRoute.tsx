import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '@app/store/store';
import { selectAuth } from '@app/store/reducers/auth';

const PrivateRoute = () => {
  const auth = useAppSelector(selectAuth);
  return auth.currentUser ? <Outlet /> : <Navigate to={`/login`} />;
};

export default PrivateRoute;
