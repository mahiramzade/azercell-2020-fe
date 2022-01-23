import React from 'react';

import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PrivateRoute } from './components/PrivateRoute';
import { PublicRoute } from './components/PublicRoute';
import { AuthContextProvider } from './context/AuthContext';
import { DataContextProvider } from './context/DataContext';
import { Dashboard } from './pages/Dashboard';
import { ExamPage } from './pages/Exam';
import { Login } from './pages/Login';
import { NewExam } from './pages/NewExam';
import { OngoingExam } from './pages/OngoingExam';
import { Register } from './pages/Register';
import { ROUTES } from './routes';
import { theme } from './utils/theme';

import './styles/tailwind.css';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <DataContextProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path={ROUTES.login}
                element={
                  <PublicRoute>
                    <Login />
                  </PublicRoute>
                }
              />
              <Route
                path={ROUTES.register}
                element={
                  <PublicRoute>
                    <Register />
                  </PublicRoute>
                }
              />
              <Route
                path={ROUTES.dashboard}
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path={ROUTES.newExam}
                element={
                  <PrivateRoute>
                    <NewExam />
                  </PrivateRoute>
                }
              />
              <Route
                path={ROUTES.exam}
                element={
                  <PrivateRoute>
                    <ExamPage />
                  </PrivateRoute>
                }
              />
              <Route
                path={ROUTES.ongoingExam}
                element={
                  <PrivateRoute>
                    <OngoingExam />
                  </PrivateRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </DataContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
};

export default App;
