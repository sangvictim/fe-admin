import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const authRoute = ['home', 'product', 'profile']

export function middleware(request: NextRequest) {
  let authToken = request.cookies.get('authToken')

  if (request.nextUrl.pathname.startsWith("/login")) {
    if (!authToken) {
      return NextResponse.next()
    } else {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  if (request.nextUrl.pathname === "/" || authRoute.includes(request.nextUrl.pathname.split('/')[1])) {
    if (authToken) {
      return NextResponse.next()
    } else {
      return NextResponse.redirect(new URL("/login", request.url))
    }
  }
}