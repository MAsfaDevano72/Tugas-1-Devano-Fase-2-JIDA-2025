-- CreateTable
CREATE TABLE "PlayerData" (
    "id" INTEGER NOT NULL,
    "name" TEXT,
    "position" TEXT,
    "image" TEXT,
    "biodata" TEXT,

    CONSTRAINT "PlayerData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL,
    "name" TEXT,
    "price" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
