import { NextResponse } from "next/server";

// Allows static export (Cloudflare Pages) to prerender this handler
export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json({ message: "Hello, world!" });
}