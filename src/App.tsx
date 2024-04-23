import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { landingRoutes } from "./routes/landing-routes";
import { ChakraProvider } from "@chakra-ui/react";

const router = createBrowserRouter([...landingRoutes]);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
