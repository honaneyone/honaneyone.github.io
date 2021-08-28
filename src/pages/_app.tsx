import '../styles/global.css'
import 'prismjs/themes/prism.css';
import 'github-markdown-css/github-markdown.css';
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
