import { NextResponse,NextRequest } from 'next/server';

export function middleware(request:NextRequest) {
  const url = request.nextUrl.pathname;

  if (url === '/' ) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}