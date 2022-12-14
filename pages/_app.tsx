import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { AppWrapper } from "@/components";
import { store } from "@/redux-state";

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
