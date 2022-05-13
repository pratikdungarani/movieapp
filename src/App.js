import { Suspense } from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "assets/styles/theme";
import MainTemplateContainer from "shared/MainTemplateContainer";
import { routes } from "routes/Routes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div>Loading</div>}>
        <BrowserRouter>
          <MainTemplateContainer>
            <Routes>
              {routes.map((route, index) => {
                const WrappedComponent = route.component;
                return (
                  <Route
                    path={route.path}
                    element={<WrappedComponent />}
                    key={index}
                  />
                );
              })}
            </Routes>
          </MainTemplateContainer>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
