import "tailwindcss/tailwind.css";
import "@/styles/main.css";
import type { AppType } from "next/app";

const App: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
