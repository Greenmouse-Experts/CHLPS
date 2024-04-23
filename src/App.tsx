import { Route, Routes } from "react-router-dom";
// import { landingRoutes } from "./routes/landing-routes";
// import { ChakraProvider } from "@chakra-ui/react";
import Homepage from "./pages/landing/homepage";
import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";
import VerifyOtp from "./pages/auth/otp";
import AdminDashboardLayout from "./layout/user";
import UserDashboard from "./pages/user/dashboard";

// const router = createBrowserRouter([...landingRoutes]);

function App() {
  {
    /* <RouterProvider router={router} /> */
  }
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/auth/register" element={<RegisterPage />} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/otp" element={<VerifyOtp />} />
      <Route path="/user/*" element={<AdminDashboardLayout />}>
        <Route path="dashboard" element={<UserDashboard />} />
      </Route>
      <Route path="/admin/*" element={<AdminDashboardLayout />} />
    </Routes>
  );
}

export default App;
