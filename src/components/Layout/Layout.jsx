import { Outlet } from 'react-router-dom';
import { AppBar } from 'components';
import { Suspense } from 'react';
import { LayoutContainer } from './Layout.styled';

export const Layout = () => {
  return (
    <LayoutContainer>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </LayoutContainer>
  );
};
