import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { rebuildUrl } = await request.json();

  revalidateTag(rebuildUrl);

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
