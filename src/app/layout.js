
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { StyledEngineProvider } from "@mui/material";
import NavBar from "./_components/NavBar/NavBar";
import Footer from "./_components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function RootLayout({ children }) {
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
  </head>;
  return (
    <html lang="en">
      <body className="w-full">
        <StyledEngineProvider injectFirst>
          <NavBar />
          <main className=" min-h-screen">{children}</main>
          <Footer />
        </StyledEngineProvider>
      </body>
    </html>
  );
}
