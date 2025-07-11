import React, { Suspense } from 'react';

const DashboardWidget = React.lazy(() => import('dashboard/DashboardWidget'));
const ProfileWidget = React.lazy(() => import('profile/ProfileWidget'));

export default function App() {
  return (
    <div>
      <h1>Shell App</h1>
      <Suspense fallback="Loading Dashboard...">
        <DashboardWidget />
      </Suspense>
      <Suspense fallback="Loading Profile...">
        <ProfileWidget />
      </Suspense>
    </div>
  );
}
