import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const authCookie = req.cookies.get("authjs.session-token");
  const isLoginPage = req.nextUrl.pathname === "/";
  const isDashboardPage = req.nextUrl.pathname.startsWith("/dashboard");

  if (!authCookie && isDashboardPage) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (authCookie && isLoginPage) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard/:path*", "/dashboard"],
};
