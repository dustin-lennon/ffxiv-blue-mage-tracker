/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { type NextRequest, NextResponse } from 'next/server'; // Import from 'next/server'
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export async function GET(request: NextRequest) {  // Use 'GET' instead of 'handler'
  console.log('API Route Triggered:', publicRuntimeConfig.version);
  return NextResponse.json({ version: publicRuntimeConfig.version });
}
