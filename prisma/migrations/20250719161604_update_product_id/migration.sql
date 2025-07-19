-- AlterTable
CREATE SEQUENCE playerdata_id_seq;
ALTER TABLE "PlayerData" ALTER COLUMN "id" SET DEFAULT nextval('playerdata_id_seq');
ALTER SEQUENCE playerdata_id_seq OWNED BY "PlayerData"."id";

-- AlterTable
CREATE SEQUENCE product_id_seq;
ALTER TABLE "Product" ALTER COLUMN "id" SET DEFAULT nextval('product_id_seq');
ALTER SEQUENCE product_id_seq OWNED BY "Product"."id";
