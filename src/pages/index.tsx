import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { ConnectButton } from "arweave-wallet-kit";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Arweave Wallet Kit</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}></div>

        <div className={styles.center}>
          <ConnectButton
            style={{
              zIndex: 10,
            }}
          />
        </div>

        <div className={styles.grid}></div>
      </main>
    </>
  );
}
