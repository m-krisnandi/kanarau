import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '@/stores/authStore';
import { Navbar } from '@/components/Navbar';
import { BottomNav } from '@/components/BottomNav';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { flushPendingStudyData } from '@/services/api';
const DashboardPage = lazy(() => import('@/pages/DashboardPage').then((m) => ({ default: m.DashboardPage })));
const LandingPage = lazy(() => import('@/pages/LandingPage').then((m) => ({ default: m.LandingPage })));
const BelajarPage = lazy(() => import('@/pages/BelajarPage').then((m) => ({ default: m.BelajarPage })));
const StudySessionPage = lazy(() => import('@/pages/StudySessionPage').then((m) => ({ default: m.StudySessionPage })));
const ReviewPage = lazy(() => import('@/pages/ReviewPage').then((m) => ({ default: m.ReviewPage })));
const JishoPage = lazy(() => import('@/pages/JishoPage').then((m) => ({ default: m.JishoPage })));
const ProgressPage = lazy(() => import('@/pages/ProgressPage').then((m) => ({ default: m.ProgressPage })));
const LoginPage = lazy(() => import('@/pages/LoginPage').then((m) => ({ default: m.LoginPage })));
const AdminDashboardPage = lazy(() => import('@/pages/AdminDashboardPage').then((m) => ({ default: m.AdminDashboardPage })));

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const { token } = useAuthStore();
  const isLoginPage = location.pathname === '/login';
  const isLandingPage = (location.pathname === '/' && !token) || location.pathname === '/landing';
  const hideNav = location.pathname.startsWith('/study-session') || isLoginPage || isLandingPage;
  const isWide = location.pathname.startsWith('/admin') || isLandingPage;

  return (
    <div className="min-h-screen min-h-[100dvh] bg-warm-50 dark:bg-[#0B0F19] text-warm-800 dark:text-slate-100 flex flex-col font-sans">
      {!hideNav && <Navbar />}
      <main className={`flex-1 mx-auto w-full ${isLandingPage ? 'p-0 max-w-none' : isWide ? 'px-4 pt-4 max-w-3xl' : 'px-3 sm:px-4 pt-2 sm:pt-2.5 max-w-md'}`}>
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
    if (token) {
      fetchUser().catch(() => {});
    }
  }, [token, fetchUser]);

  useEffect(() => {
    void flushPendingStudyData();
  }, []);

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center text-xs text-stone-500">Loading...</div>}>
            <Routes>
              <Route path="/" element={<RootRoute />} />
              <Route path="/landing" element={<LandingPage />} />
              <Route path="/belajar" element={<ProtectedRoute><BelajarPage /></ProtectedRoute>} />
              <Route path="/study-session/:deckId" element={<ProtectedRoute><StudySessionPage /></ProtectedRoute>} />
              <Route path="/review" element={<ProtectedRoute><ReviewPage /></ProtectedRoute>} />
              <Route path="/jisho" element={<ProtectedRoute><JishoPage /></ProtectedRoute>} />
              <Route path="/progress" element={<ProtectedRoute><ProgressPage /></ProtectedRoute>} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/admin" element={<AdminRoute><AdminDashboardPage /></AdminRoute>} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
