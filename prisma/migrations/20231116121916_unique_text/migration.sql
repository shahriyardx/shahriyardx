/*
  Warnings:

  - A unique constraint covering the columns `[text]` on the table `Link` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Link_text_key" ON "Link"("text");
