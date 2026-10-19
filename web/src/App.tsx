import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '@/stores/authStore';
import { Navbar } from '@/components/Navbar';
import { BottomNav } from '@/components/BottomNav';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { DashboardPage } from '@/pages/DashboardPage';
import { LandingPage } from '@/pages/LandingPage';
import { BelajarPage } from '@/pages/BelajarPage';
import { StudySessionPage } from '@/pages/StudySessionPage';
import { ReviewPage } from '@/pages/ReviewPage';
import { JishoPage } from '@/pages/JishoPage';
import { ProgressPage } from '@/pages/ProgressPage';
import { LoginPage } from '@/pages/LoginPage';
import { AdminDashboardPage } from '@/pages/AdminDashboardPage';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const { token } = useAuthStore();
  const isLoginPage = location.pathname === '/login';
  const isLandingPage = (location.pathname === '/' && !token) || location.pathname === '/landing';
  const hideNav = location.pathname.startsWith('/study-session') || isLoginPage || isLandingPage;
  const isWide = location.pathname.startsWith('/admin') || isLandingPage;

  return (
    <div className="min-h-screen bg-warm-50 dark:bg-[#0B0F19] text-warm-800 dark:text-slate-100 flex flex-col font-sans">
      {!hideNav && <Navbar />}
      <main className={`flex-1 mx-auto w-full ${isLandingPage ? 'p-0 max-w-none' : isWide ? 'px-4 pt-4 max-w-3xl' : 'px-4 pt-4 max-w-md'}`}>
        {children}
      </main>
      {!hideNav && <BottomNav />}
    </div>
  );
};

const RootRoute: React.FC = () => {
  const { token } = useAuthStore();
  if (token) {
    return <DashboardPage />;
  }
  return <LandingPage />;
};

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { token } = useAuthStore();
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

const AdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { token, user } = useAuthStore();
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  if (user?.role !== 'ADMIN') {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
};

export const App: React.FC = () => {
  const { fetchUser, token, user } = useAuthStore();

  useEffect(() => {
    if (token && !user) {
      fetchUser().catch(() => {});
    }
  }, [token, user, fetchUser]);

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<RootRoute />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route
              path="/belajar"
              element={
                <ProtectedRoute>
                  <BelajarPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/study-session/:deckId"
              element={
                <ProtectedRoute>
                  <StudySessionPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/review"
              element={
                <ProtectedRoute>
                  <ReviewPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/jisho"
              element={
                <ProtectedRoute>
                  <JishoPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/progress"
              element={
                <ProtectedRoute>
                  <ProgressPage />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/admin"
              element={
                <AdminRoute>
                  <AdminDashboardPage />
                </AdminRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
