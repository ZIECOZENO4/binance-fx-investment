-- CreateTable
CREATE TABLE "CustomCoin" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "usdValue" DOUBLE PRECISION NOT NULL,
    "rank" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,
    "confirmed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "CustomCoin_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CustomCoin" ADD CONSTRAINT "CustomCoin_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
