import { getServerSession } from "next-auth/next";
import authOptions from "@/pages/api/auth/[...nextauth]";
import  type { Session as SessionType } from "next-auth";

export const getSession = async () => {
  return await getServerSession(authOptions as any);
};

export const getCurrentUser = async () => {
  const session = await getSession() as SessionType;
  return session?.user;
};