/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
DROP COLUMN "name",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "user_id" SERIAL NOT NULL,
ADD COLUMN     "username" TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("user_id");

-- CreateTable
CREATE TABLE "Pet" (
    "pet_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "species" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "medical_condition" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("pet_id")
);

-- CreateTable
CREATE TABLE "Characteristics" (
    "characteristic_id" SERIAL NOT NULL,
    "children_friendly" TEXT NOT NULL,
    "house_trained" TEXT NOT NULL,
    "live_with_pets" TEXT NOT NULL,
    "good_with_commands" TEXT NOT NULL,
    "separation_anxiety" TEXT NOT NULL,
    "knows_tricks" TEXT NOT NULL,
    "indoor_preference" TEXT NOT NULL,

    CONSTRAINT "Characteristics_pkey" PRIMARY KEY ("characteristic_id")
);

-- CreateTable
CREATE TABLE "AdoptionApplication" (
    "application_id" SERIAL NOT NULL,
    "applicant_name" TEXT NOT NULL,
    "applicant_email" TEXT NOT NULL,
    "applicant_phone" TEXT NOT NULL,
    "pet_id" INTEGER NOT NULL,
    "application_status" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AdoptionApplication_pkey" PRIMARY KEY ("application_id")
);

-- CreateTable
CREATE TABLE "Volunteer" (
    "volunteer_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "interests" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Volunteer_pkey" PRIMARY KEY ("volunteer_id")
);

-- CreateTable
CREATE TABLE "_CharacteristicsToPet" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Characteristics_children_friendly_key" ON "Characteristics"("children_friendly");

-- CreateIndex
CREATE UNIQUE INDEX "Characteristics_house_trained_key" ON "Characteristics"("house_trained");

-- CreateIndex
CREATE UNIQUE INDEX "Characteristics_live_with_pets_key" ON "Characteristics"("live_with_pets");

-- CreateIndex
CREATE UNIQUE INDEX "Characteristics_good_with_commands_key" ON "Characteristics"("good_with_commands");

-- CreateIndex
CREATE UNIQUE INDEX "Characteristics_separation_anxiety_key" ON "Characteristics"("separation_anxiety");

-- CreateIndex
CREATE UNIQUE INDEX "Characteristics_knows_tricks_key" ON "Characteristics"("knows_tricks");

-- CreateIndex
CREATE UNIQUE INDEX "Characteristics_indoor_preference_key" ON "Characteristics"("indoor_preference");

-- CreateIndex
CREATE UNIQUE INDEX "_CharacteristicsToPet_AB_unique" ON "_CharacteristicsToPet"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacteristicsToPet_B_index" ON "_CharacteristicsToPet"("B");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdoptionApplication" ADD CONSTRAINT "AdoptionApplication_pet_id_fkey" FOREIGN KEY ("pet_id") REFERENCES "Pet"("pet_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacteristicsToPet" ADD CONSTRAINT "_CharacteristicsToPet_A_fkey" FOREIGN KEY ("A") REFERENCES "Characteristics"("characteristic_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacteristicsToPet" ADD CONSTRAINT "_CharacteristicsToPet_B_fkey" FOREIGN KEY ("B") REFERENCES "Pet"("pet_id") ON DELETE CASCADE ON UPDATE CASCADE;
