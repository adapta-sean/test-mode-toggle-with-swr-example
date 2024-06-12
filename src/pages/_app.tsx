import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {SWRConfig} from "swr";
import fetcher from "@/swr/fetcher";
import TestModeProvider from "@/context/salable/test-mode-context";
import Cookies from "js-cookie";
import Layout from "@/components/layout";
import {cookieOptions} from "@/constants";

Cookies.set('is-test-mode', 'true', cookieOptions);

export default function App({Component, pageProps}: AppProps) {
    return (
        <SWRConfig value={{fetcher}}>
            <div className='min-h-screen flex flex-col'>
                <header className='px-16 py-8 bg-slate-400 flex-initial'>App Header</header>
                <TestModeProvider>
                    <Layout>
                        <Component {...pageProps}/>
                    </Layout>
                </TestModeProvider>
            </div>
        </SWRConfig>);
}
