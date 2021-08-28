import '../styles/global.css'
import 'prismjs/themes/prism.css';
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
