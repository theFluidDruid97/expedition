/*
  Warnings:

  - Added the required column `callsign` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "post" TEXT NOT NULL,
    "callsign" TEXT NOT NULL,
    "req_gear" TEXT,
    "hours" TEXT
);
INSERT INTO "new_Post" ("hours", "id", "post") SELECT "hours", "id", "post" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
