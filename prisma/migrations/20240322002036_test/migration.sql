/*
  Warnings:

  - You are about to drop the `CoinAmount` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CustomCoin` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CoinAmount" DROP CONSTRAINT "CoinAmount_user_id_fkey";

-- DropForeignKey
ALTER TABLE "CustomCoin" DROP CONSTRAINT "CustomCoin_user_id_fkey";

-- AlterTable
ALTER TABLE "OutInvest" ADD COLUMN     "totalValueInUSDT" TEXT;

-- DropTable
DROP TABLE "CoinAmount";

-- DropTable
DROP TABLE "CustomCoin";

-- CreateTable
CREATE TABLE "Coin" (
    "id" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "usdValue" DOUBLE PRECISION DEFAULT 0,

    CONSTRAINT "Coin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserCoinAmount" (
    "id" TEXT NOT NULL,
    "coinId" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserCoinAmount_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Coin_symbol_key" ON "Coin"("symbol");

-- AddForeignKey
ALTER TABLE "UserCoinAmount" ADD CONSTRAINT "UserCoinAmount_coinId_fkey" FOREIGN KEY ("coinId") REFERENCES "Coin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCoinAmount" ADD CONSTRAINT "UserCoinAmount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
