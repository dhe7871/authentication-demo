import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

//here store the routes which are to be protected
// const isProtectedRoute = createRouteMatcher(["/user-profile"]);
const isPublicRoute = createRouteMatcher(["/", "/sign-in(.*)", "/sign-up(.*)"]);
const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (auth, req) => {
    //this, protect method will automatically redirect the user to the sign in page automatically
    // if (!isPublicRoute(req)) await auth.protect();

    //a bit more flexible
    const {userId, redirectToSignIn} = await auth();
    if(isAdminRoute(req) && (await auth()).sessionClaims?.metadata?.role !== "admin"){
        const url = new URL("/", req.url);
        return NextResponse.redirect(url);
    }
    if(!userId && !isPublicRoute(req)){
        //add custom logic before redirection
        //to logging unauthorized access attempt, for security purposes etc.

        return redirectToSignIn();
    }
});

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
        // Always run for API routes
        "/(api|trpc)(.*)",
    ],
};
