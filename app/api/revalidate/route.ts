import { NextRequest, NextResponse } from 'next/server';
import { revalidate } from 'shopify/index';

// eslint-disable-next-line require-await
export async function POST(req: NextRequest): Promise<NextResponse> {
    return revalidate(req);
}
