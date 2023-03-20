-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'draft',
    "sort" BOOLEAN NOT NULL,
    "user_created" TIMESTAMP(3) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL,
    "user_updated" TIMESTAMP(3) NOT NULL,
    "date_updated" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
