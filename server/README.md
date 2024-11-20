## Step 1 Install Set-up server and express etc.

```sh
npm init -y
npm install express morgan body-parser cors nodemon
```

## Set-up Prisma to database

```sh
npm install prisma
npx prisma init
npm install @prisma/client


// Doc ใช้ในการสร้างและอัพเดตฐานข้อมูล
npx prisma migrate dev --name productTesting_init //productTesting_init สามารถใช้ชื่ออื่นได้

// อัพเดต Prisma schema
npx prisma migrate dev
```
