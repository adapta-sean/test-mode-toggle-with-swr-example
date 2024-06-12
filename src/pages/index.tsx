import {useTestMode} from "@/context/salable/use-test-mode";
import useSWR from "swr";
import {ResponseData} from "@/pages/api/get-data";

export default function Home() {
    const {isTestMode} = useTestMode();
    const {data, error, isLoading} = useSWR<ResponseData>('/api/get-data');

    if (error || !data) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;

    return (
        <main>
            <h1 className='font-bold mb-4'>Toggle test mode with SWR full cache invalidation</h1>
            <p>isTestMode Client Side State: {String(isTestMode)}</p>
            <p>isTestMode Server Side Response: {String(data.isTestMode)}</p>
        </main>
    );
}
