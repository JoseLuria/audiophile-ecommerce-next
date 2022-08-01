import type { AppProps } from "next/app";
import "../styles/globals.css";
import { AppWrapper } from "../components";
import { Provider } from "react-redux";
import { store } from "../redux";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </Provider>
  );
}

export default MyApp;
