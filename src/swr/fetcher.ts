export default async function fetcher<T>(
    input: RequestInfo,
    init?: RequestInit
): Promise<T> {
    const res = await fetch(input, init);
    await new Promise(resolve => setTimeout(resolve, 1000));
    return res.json()
}

export async function customFetcher<T>(
    [input]: [RequestInfo, boolean],
    init?: RequestInit
): Promise<T> {
    const res = await fetch(input, init);
    await new Promise(resolve => setTimeout(resolve, 1000));
    return res.json()
}