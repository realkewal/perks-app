import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const password = await hash("perkspass00", 12);
  const user = await prisma.user.upsert({
    where: { email: "hello@iamkewal.com" },
    update: {},
    create: {
      email: "hello@iamkewal.com",
      name: "Kewal",
      password,
      referralCode: "kewal2023",
    },
  });
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
