import { handlers } from '@/auth';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

export const runtime = 'edge';

const prisma = new PrismaClient().$extends(withAccelerate());

export const { GET, POST } = handlers;

export const getUsers = async () => {
  const users = await prisma.user.findMany({
    where: {
      email: {
        contains: 'tsomacele@gmail.com',
      },
    },
    cacheStrategy: { ttl: 60 },
  });

  console.log(users);
};
