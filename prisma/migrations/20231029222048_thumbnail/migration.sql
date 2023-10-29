/*
  Warnings:

  - You are about to drop the `Test` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "BlogPost" ADD COLUMN     "thumbnail" TEXT NOT NULL DEFAULT 'https://shahriyar.dev/images/me.jpg';

-- DropTable
DROP TABLE "Test";
