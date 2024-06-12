import {ReactNode} from "react";
import {useTestMode} from "@/context/salable/use-test-mode";
import Link from "next/link";

type LayoutProps = { children: ReactNode }

export default function Layout({children}: LayoutProps) {
    const {isTestMode, toggleTestMode, toggleTestModeWithCacheInvalidation} = useTestMode();

    const handleClick = async () => {
        await toggleTestMode()
    };

    const handleClickWithCacheInvalidation = async () => {
        await toggleTestModeWithCacheInvalidation()
    };

    return (
        <div className='flex gap-4 flex-auto'>
            <div className='max-w-80 bg-slate-100 flex flex-col flex-auto'>
                <div className=' pt-8 pl-16 pr-8 '>
                    <ul className='list-disc'>
                        <li><Link href='/' className='underline hover:no-underline'>SWR Full Cache Invalidation</Link></li>
                        <li><Link href='/using-test-mode-swr-dependency' className='underline hover:no-underline'>SWR Revalidate with Dependency</Link></li>
                    </ul>
                </div>
                <div className='pl-16 pr-8 py-8 bg-slate-200 mt-auto flex gap-4 flex-col'>
                    <button onClick={handleClick} className='rounded bg-slate-300 p-4 hover:bg-slate-400'>Toggle Test Mode {isTestMode ? 'Off' : 'On'} with Dependency</button>
                    <button onClick={handleClickWithCacheInvalidation} className='rounded bg-slate-300 p-4 hover:bg-slate-400'>Toggle Test Mode {isTestMode ? 'Off' : 'On'} with full SWR Cache Invalidation</button>
                </div>
            </div>
            <div className='py-8 px-8'>
                {children}
            </div>
        </div>
    )
}