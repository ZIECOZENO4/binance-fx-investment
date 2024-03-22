/*
  Warnings:

  - A unique constraint covering the columns `[amount]` on the table `UserCoinAmount` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `image` to the `Coin` table without a default value. This is not possible if the table is not empty.
  - Made the column `usdValue` on table `Coin` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Coin" ADD COLUMN     "image" TEXT NOT NULL,
ALTER COLUMN "usdValue" SET NOT NULL;

-- AlterTable
ALTER TABLE "Deposit" ADD COLUMN     "totalValueInUSDT" TEXT;

-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "totalValueInUSDT" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "investBalance" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Withdrawal" ADD COLUMN     "totalValueInUSDT" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "UserCoinAmount_amount_key" ON "UserCoinAmount"("amount");
