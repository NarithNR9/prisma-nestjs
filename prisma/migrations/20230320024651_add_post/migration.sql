-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "sort" DROP NOT NULL,
ALTER COLUMN "user_created" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "date_created" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "user_updated" DROP NOT NULL,
ALTER COLUMN "date_updated" DROP NOT NULL;
