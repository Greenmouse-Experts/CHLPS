import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { landingRoutes } from "./routes/landing-routes";
import { ChakraProvider } from "@chakra-ui/react";
import Homepage from "./pages/landing/homepage";
import LandingLayout from "./layout/landing";

// const router = createBrowserRouter([...landingRoutes]);

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        {/* <RouterProvider router={router} /> */}
        <Routes>
          <Route path="/" element={<LandingLayout />}>
            <Route path="" element={<Homepage />} />
          </Route>
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
