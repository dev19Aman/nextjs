import { ThemeProvider } from "next-themes";
import Layout from "../component/Layout";
import "../styles/globals.css";
import Header from "./section/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <Header/>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
