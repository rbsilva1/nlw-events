import { prisma } from '../src/lib/prisma'
async function seed() {
  await prisma.event.create({
    data: {
      id: "236a3b4e-192c-4bab-92f6-7472dacb93ee",
      title: "Unite Summit",
      slug: "unite-summit",
      details: "Um evento para devs",
      maximumAttendees: 120
    }
  })
}

seed().then(() => {
  console.log("Database seeded!");
  prisma.$disconnect();
})