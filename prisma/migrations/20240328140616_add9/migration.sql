/*
  Warnings:

  - You are about to drop the column `usdValue` on the `Coin` table. All the data in the column will be lost.
  - You are about to drop the `UserCoinAmount` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserCoinAmount" DROP CONSTRAINT "UserCoinAmount_coinId_fkey";

-- DropForeignKey
ALTER TABLE "UserCoinAmount" DROP CONSTRAINT "UserCoinAmount_userId_fkey";

-- AlterTable
ALTER TABLE "Coin" DROP COLUMN "usdValue",
ADD COLUMN     "marketCap" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "UserCoinAmount";

-- CreateTable
CREATE TABLE "UserCoin" (
    "userId" TEXT NOT NULL,
    "coinId" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "usdtValue" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "UserCoin_pkey" PRIMARY KEY ("userId","coinId")
);

-- AddForeignKey
ALTER TABLE "UserCoin" ADD CONSTRAINT "UserCoin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCoin" ADD CONSTRAINT "UserCoin_coinId_fkey" FOREIGN KEY ("coinId") REFERENCES "Coin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
