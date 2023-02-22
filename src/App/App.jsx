import { Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useDispatch } from "react-redux";
import { lazy, Suspense, useEffect } from "react";
import lightTheme from "../theme/themeStyle";
import GlobalStyle from "../theme/GlobalStyle.styled";
import PhoneBookPage from "../pages/PhoneBookPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
// import HomePage from "../pages/HomePage";
// import PublicRoute from "../components/PublicRoute/PublicRoute";
// import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import { refresh } from "../redux/user/userOperations";

const HomePage = lazy(() =>
  import("../pages/HomePage" /* webpackChunkName: "Home__page" */),
);
const PublicRoute = lazy(() =>
  import(
    "../components/PublicRoute/PublicRoute" /* webpackChunkName: "Public__Route" */
  ),
);
const PrivateRoute = lazy(() =>
  import(
    "../components/PrivateRoute/PrivateRoute" /* webpackChunkName: "Private__Route" */
  ),
);
function App() {
  const themeStyle = lightTheme;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={themeStyle}>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <HomePage />
                </PublicRoute>
              }
            >
              <Route
                path="contacts"
                element={
                  <PrivateRoute redirectTo="/login">
                    <PhoneBookPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="register"
                element={
                  <PublicRoute restricted redirectTo="/contacts">
                    <RegisterPage />
                  </PublicRoute>
                }
              />
              <Route
                path="login"
                element={
                  <PublicRoute restricted redirectTo="/contacts">
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route path="*" element={<Navigate to="/login" />} />
            </Route>
          </Routes>
        </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;
