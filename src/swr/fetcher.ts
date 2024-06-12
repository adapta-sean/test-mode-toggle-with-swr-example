export default async function fetcher<T>(
    input: RequestInfo,
    init?: RequestInit
): Promise<T> {
    const res = await fetch(input, init);
    return res.json()
}

export async function customFetcher<T>(
    [input, isTestMode]: [RequestInfo, boolean],
    init?: RequestInit
): Promise<T> {
    const res = await fetch(input, init);
    return res.json()
}