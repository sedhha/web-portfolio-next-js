import '@/styles/global.scss';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  console.log('Vr = ', process.env.FIREBASE_DEPLOYMENT_ENVIRONMENT);
  return <Component {...pageProps} />;
}
