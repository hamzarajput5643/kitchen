import { selectAuth } from '@app/store/reducers/auth';
import { useAppSelector } from '@app/store/store';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const auth = useAppSelector(selectAuth);;
  return auth.currentUser ? <Navigate to={`/admin`} /> : <Outlet />;
};

export default PublicRoute;
