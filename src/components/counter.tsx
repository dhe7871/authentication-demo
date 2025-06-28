"use client";
import { useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";

export default function Counter() {
    const [count, setCount] = useState(0);
    // const { isLoaded, userId, sessionId, getToken } = useAuth();     //use this if you need only the userId
    //"isLoaded" and "userId", returns null if the user has signed out
    // if (!isLoaded || !userId) return null;

    const {isLoaded, isSignedIn, user} = useUser(); //use this if you need full "user" object

    //"isLoaded" and "isSignedIn", returns null if the user has signed out
    if (!isLoaded || !isSignedIn) return null;

    return (
        <div>
            <p>Count: {count}</p>
            <button type="button" onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}
