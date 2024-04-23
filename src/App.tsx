import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { landingRoutes } from "./routes/landing-routes";
import LandingLayout from "./layout/landing";
import Homepage from "./pages/landing/homepage";

// const router = createBrowserRouter([...landingRoutes]);

function App() {
  // return <RouterProvider router={router} />;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LandingLayout />}>
            <Route path="/" element={<Homepage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
