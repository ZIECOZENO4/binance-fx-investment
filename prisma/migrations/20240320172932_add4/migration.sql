/*
  Warnings:

  - You are about to drop the column `transactionId` on the `OutInvest` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CustomCoin" ADD COLUMN     "balance" DOUBLE PRECISION NOT NULL DEFAULT 0.00;

-- AlterTable
ALTER TABLE "OutInvest" DROP COLUMN "transactionId",
ADD COLUMN     "gasFee" TEXT NOT NULL DEFAULT '0.00 wei';
