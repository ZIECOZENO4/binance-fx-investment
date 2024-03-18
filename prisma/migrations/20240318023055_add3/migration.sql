/*
  Warnings:

  - You are about to drop the `PendingDeposit` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PendingWithdraw` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PendingDeposit" DROP CONSTRAINT "PendingDeposit_user_id_fkey";

-- DropForeignKey
ALTER TABLE "PendingWithdraw" DROP CONSTRAINT "PendingWithdraw_user_id_fkey";

-- DropTable
DROP TABLE "PendingDeposit";

-- DropTable
DROP TABLE "PendingWithdraw";

-- CreateTable
CREATE TABLE "Withdrawal" (
    "id" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "coin" TEXT NOT NULL,
    "walletAddress" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "gasFee" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "userName" TEXT NOT NULL,

    CONSTRAINT "Withdrawal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Deposit" (
    "id" TEXT NOT NULL,
    "depositorTransactionId" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "depositorWalletAddress" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "depositorAmount" TEXT NOT NULL,
    "depositorName" TEXT NOT NULL,
    "depositorCoin" TEXT NOT NULL,

    CONSTRAINT "Deposit_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Withdrawal" ADD CONSTRAINT "Withdrawal_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Deposit" ADD CONSTRAINT "Deposit_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
