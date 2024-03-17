/*
  Warnings:

  - You are about to drop the column `userName` on the `Deposit` table. All the data in the column will be lost.
  - You are about to drop the `Details` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Level` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Details" DROP CONSTRAINT "Details_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Level" DROP CONSTRAINT "Level_user_id_fkey";

-- AlterTable
ALTER TABLE "Deposit" DROP COLUMN "userName";

-- DropTable
DROP TABLE "Details";

-- DropTable
DROP TABLE "Level";
