import { HashRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import Home from "./Pages/Home";
import Starred from "./Pages/Starred";
import Show from "./Pages/Show";
import PageLayout from "./Components/MainLayout";
import { FadeIn } from "./Components/Common/FlexGrid";

const queryClient = new QueryClient();

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: 18px;
    margin: 0;
    padding-top: 40px;
    padding-left: 15px;
    padding-right: 15px;
    background: black;
  }
`;

const theme = {
  fontFamily: 'Roboto, sans-serif',
  mainColors: {
    magenta: 'red',
    white: 'white',
    darkgray: 'darkgray',
  },
};

function App() {
  return (
    <FadeIn>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <HashRouter>
            <Routes>
              <Route element={<PageLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/starred" element={<Starred />} />
              </Route>
              <Route path="/show/:showId" element={<Show />} />
              <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>
          </HashRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </FadeIn>
  );
}

export default App;
