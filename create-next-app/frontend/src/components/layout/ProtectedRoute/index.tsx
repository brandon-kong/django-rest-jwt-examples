import { signOut } from "next-auth/react";
import { getCurrentUser } from "@/lib/session";
import type { ProtectedPageProps } from "@/types/types";
import { LogoutButton } from "@/components/Buttons";

const ProtectedRoute = async ({ children }: ProtectedPageProps) => {
    const user = await getCurrentUser();
    
    if (!user) {
        return <>
        <h1>You need to be authenticated to view this</h1>
        </>;
    }
    
    return (
    <>
    <LogoutButton />
    {children}
    </>
    )
};

export default ProtectedRoute;