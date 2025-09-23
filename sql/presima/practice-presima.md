# Presima/Prisma Practice

If you meant Prisma (Node.js ORM), here are practice steps. If Presima is different, let me know and I will adjust.

## Setup (Node + Prisma + PostgreSQL)
1. npm init -y
2. npm i -D prisma
3. npm i @prisma/client
4. npx prisma init --datasource-provider postgresql
5. Set DATABASE_URL in .env

## Example schema.prisma
```prisma
model User {
  id      Int     @id @default(autoincrement())
  email   String  @unique
  name    String?
  age     Int?
  posts   Post[]
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  author    User    @relation(fields: [authorId], references: [id])
  authorId  Int
}
```

## Generate + Migrate
- npx prisma generate
- npx prisma migrate dev --name init

## Sample Scripts (Node.js)
```js
// prisma-practice.js
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // Create
  const user = await prisma.user.create({
    data: { email: 'alice@example.com', name: 'Alice', age: 25 }
  })

  // Read
  const users = await prisma.user.findMany({ where: { age: { gte: 20 } } })

  // Update
  await prisma.user.update({ where: { id: user.id }, data: { age: 26 } })

  // Delete
  await prisma.user.delete({ where: { id: user.id } })
}

main().finally(() => prisma.$disconnect())
```

## Practice Tasks
1) Extend the schema with a `City` model and relate users to cities.
2) Add a `createdAt` timestamp to `Post` with a default of `now()`.
3) Write a query to fetch users along with their published posts only.
4) Create a transaction that creates a user and two posts together.
5) Add Zod validation (or class-validator) before creating a user.
