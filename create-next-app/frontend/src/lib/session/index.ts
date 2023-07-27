import { getServerSession } from "next-auth/next";
import authOptions from "@/pages/api/auth/[...nextauth]";

export const getSession = async () => {
  return await getServerSession(authOptions);
};

export const getCurrentUser = async () => {
  const session = await getSession();
  return session?.user;
};

export const isAdmin = async (userId?: string) => {
  if (!userId) return false;

  const { userType } =
    (await db.user.findFirst({
      where: {
        id: userId,
      },
      select: {
        userType: true,
      },
    })) || {};

  return userType === UserType.Admin;
};