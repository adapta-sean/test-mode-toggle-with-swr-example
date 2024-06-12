import {createContext, ReactNode, useEffect, useState} from 'react';
import Cookies from 'js-cookie'
import resetSwrCache from "@/swr/invalidate-cache";
import {cookieOptions} from "@/constants";

type SalableContextType = {
    isTestMode: boolean,
    toggleTestModeWithCacheInvalidation: () => Promise<void>,
    toggleTestMode: () => Promise<void>,
}

const defaultProps: SalableContextType = {
    isTestMode: true,
    toggleTestModeWithCacheInvalidation: () => Promise.resolve(),
    toggleTestMode: () => Promise.resolve(),
};

export const TestModeContext = createContext<SalableContextType>(defaultProps);

type TestModeProviderProps = { children: ReactNode }

export default function TestModeProvider({children}: TestModeProviderProps) {
    const [isTestMode, setTestMode] = useState(true);

    useEffect(() => {
        switch (Cookies.get('is-test-mode')) {
            case undefined:
                Cookies.set('is-test-mode', 'true', cookieOptions);
                setTestMode(true);
                return;
            case 'true':
                setTestMode(true);
                return;
            case 'false':
                setTestMode(false);
                return;
            default:
                console.error('Invalid is-test-mode cookie value');
        }
    }, []);

    const toggleTestModeWithCacheInvalidation = async () => {
        Cookies.set('is-test-mode', isTestMode ? 'false' : 'true', cookieOptions);
        await resetSwrCache();
        setTestMode(!isTestMode);
    };

    const toggleTestMode = async () => {
        Cookies.set('is-test-mode', isTestMode ? 'false' : 'true', cookieOptions);
        setTestMode(!isTestMode);
    };

    return (
        <TestModeContext.Provider value={{
            isTestMode,
            toggleTestMode,
            toggleTestModeWithCacheInvalidation
        }}>
            {children}
        </TestModeContext.Provider>
    )
}
