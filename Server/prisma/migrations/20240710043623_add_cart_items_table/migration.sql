-- CreateTable
CREATE TABLE "cart_items_table" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "cart_items_table_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "cart_items_table" ADD CONSTRAINT "cart_items_table_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users_table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
