import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const allowedCountry = process.env.ALLOWED_COUNTRY_CODE ?? "CH";
const restrict = process.env.RESTRICT_TO_COUNTRY === "true";

export function middleware(request: NextRequest) {
  if (!restrict) {
    return NextResponse.next();
  }

  const country = request.geo?.country || request.headers.get("x-vercel-ip-country");

  if (country && country.toUpperCase() !== allowedCountry.toUpperCase()) {
    const url = new URL("/blocked", request.url);
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api/auth|_next|favicon.ico).*)"]
};
