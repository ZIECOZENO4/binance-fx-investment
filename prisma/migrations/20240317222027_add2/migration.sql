/*
  Warnings:

  - You are about to drop the `Deposit` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Withdraw` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Deposit" DROP CONSTRAINT "Deposit_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Withdraw" DROP CONSTRAINT "Withdraw_user_id_fkey";

-- AlterTable
ALTER TABLE "OutInvest" ADD COLUMN     "outAmount" TEXT,
ADD COLUMN     "outCoin" TEXT;

-- DropTable
DROP TABLE "Deposit";

-- DropTable
DROP TABLE "Withdraw";

-- CreateTable
CREATE TABLE "PendingWithdraw" (
    "id" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "coin" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "balance" TEXT NOT NULL,
    "walletAddress" TEXT NOT NULL,
    "gasFee" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "userName" TEXT NOT NULL,

    CONSTRAINT "PendingWithdraw_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PendingDeposit" (
    "id" TEXT NOT NULL,
    "depositorTransactionId" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "depositorWalletAddress" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "depositorAmount" TEXT NOT NULL,
    "depositorName" TEXT NOT NULL,
    "depositorCoin" TEXT NOT NULL,

    CONSTRAINT "PendingDeposit_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PendingWithdraw" ADD CONSTRAINT "PendingWithdraw_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PendingDeposit" ADD CONSTRAINT "PendingDeposit_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
