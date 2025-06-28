//these does not work on client components, instead use "useAuth" and "useUser" hooks
import { auth, currentUser } from "@clerk/nextjs/server";

export default async function DashboardPage() {
    const authObject = await auth();
    const userObj = await currentUser();

    console.log(authObject, userObj);
    return <h1>DashboardPage</h1>;
}
