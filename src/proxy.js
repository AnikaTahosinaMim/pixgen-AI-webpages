import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

// This function can be marked `async` if using `await` inside
export async function proxy(request) {
  //   console.log("masseage from proxy")
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  if (!session) {
    return NextResponse.redirect(new URL("/singin", request.url));
  }
}
console.log("masseage from proxy");

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

export const config = {
  matcher: ["/profile",'/all-photos/:path'],
};
