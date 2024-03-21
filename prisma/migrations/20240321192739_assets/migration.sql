-- CreateTable
CREATE TABLE "CoinAmount" (
    "id" TEXT NOT NULL,
    "coinId" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "CoinAmount_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CoinAmount" ADD CONSTRAINT "CoinAmount_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
