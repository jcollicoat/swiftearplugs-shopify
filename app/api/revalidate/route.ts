import { NextRequest, NextResponse } from 'next/server';
import { revalidate } from 'lib/shopify';

// eslint-disable-next-line require-await
export async function POST(req: NextRequest): Promise<NextResponse> {
    return revalidate(req);
}
