/*
  Warnings:

  - Added the required column `petURL` to the `Pet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pet" ADD COLUMN     "petURL" TEXT NOT NULL;
