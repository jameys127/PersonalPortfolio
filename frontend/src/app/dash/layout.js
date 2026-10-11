import RequireAuth from '../../features/protection/RequireAuth';
import DashLayout from '../../components/Private/DashLayout';

export const metadata = {
  title: 'Dashboard | Jeremiah Sheehy',
  robots: {index: false},
};

export default function Layout({children}) {
  return (
    <RequireAuth>
      <DashLayout>{children}</DashLayout>
    </RequireAuth>
  );
}
