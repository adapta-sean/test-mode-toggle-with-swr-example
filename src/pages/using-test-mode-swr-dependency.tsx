import {useTestMode} from "@/context/salable/use-test-mode";
import useSWR from "swr";
import {customFetcher} from "@/swr/fetcher";
import {ErrorResponseData, ResponseData} from "@/pages/api/get-data";

export default function UsingTestModeSwrDependency() {
    const {isTestMode} = useTestMode();
    const {data, error, isLoading} = useSWR<ResponseData>(['/api/get-data', isTestMode], {fetcher: customFetcher});

    if (isLoading) return <div>Loading...</div>;
    if (error || !data) return <div>Failed to load</div>;

    return (
        <main>
            <h1 className='font-bold mb-4'>Toggle test mode using SWR isTestMode dependency</h1>
            <p>isTestMode Client Side State: {String(isTestMode)}</p>
            <p>isTestMode Server Side Response: {String(data.isTestMode)}</p>
        </main>
    );
}
