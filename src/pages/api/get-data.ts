import type { NextApiRequest, NextApiResponse } from 'next'

export type ResponseData = {
    isTestMode: boolean
}

export type ErrorResponseData = {
    error: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData | ErrorResponseData>
) {
    const isTestModeCookie = req.cookies['is-test-mode'];

    if(!isTestModeCookie) {
        res.status(400).json({error: 'Missing is-test-mode cookie'});
        return;
    }

    console.log('cookie', isTestModeCookie);

    const isTestMode = isTestModeCookie === 'true';

    res.status(200).json({ isTestMode })
}