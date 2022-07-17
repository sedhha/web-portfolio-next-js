import '@/styles/global.scss';
import type { AppProps } from 'next/app';

console.log('Env Variables = ', process.env);

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
