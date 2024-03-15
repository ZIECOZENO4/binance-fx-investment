-- CreateTable
CREATE TABLE "Withdraw" (
    "id" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "coin" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "balance" TEXT NOT NULL,
    "walletAddress" TEXT NOT NULL,
    "gasFee" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "userName" TEXT NOT NULL,

    CONSTRAINT "Withdraw_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OutInvest" (
    "id" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "walletAddress" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "userName" TEXT NOT NULL,

    CONSTRAINT "OutInvest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Deposit" (
    "id" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "walletAddress" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "userName" TEXT NOT NULL,

    CONSTRAINT "Deposit_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Withdraw" ADD CONSTRAINT "Withdraw_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OutInvest" ADD CONSTRAINT "OutInvest_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Deposit" ADD CONSTRAINT "Deposit_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
