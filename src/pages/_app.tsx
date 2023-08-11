import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ArweaveWalletKit } from "arweave-wallet-kit";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ArweaveWalletKit
      config={{
        permissions: ["ACCESS_ADDRESS"],
        ensurePermissions: true,
        appInfo: {
          name: "Arweave Wallet Kit Bug",
        },
      }}
      theme={{
        accent: { r: 166, g: 42, b: 34 },
      }}
    >
      <Component {...pageProps} />
    </ArweaveWalletKit>
  );
}
