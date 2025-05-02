import { Outlet } from 'react-router-dom';
import MainHeader from '../components/navigation/MainHeader';
import SessionProvider from '../store/session-store';

export default function Root() {
  return (
    <SessionProvider>
      <MainHeader />
      <Outlet />
    </SessionProvider>
  );
}
