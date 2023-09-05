/*
  Warnings:

  - You are about to drop the `_CharacteristicsToPet` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `pet_id` to the `Characteristics` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_CharacteristicsToPet" DROP CONSTRAINT "_CharacteristicsToPet_A_fkey";

-- DropForeignKey
ALTER TABLE "_CharacteristicsToPet" DROP CONSTRAINT "_CharacteristicsToPet_B_fkey";

-- AlterTable
ALTER TABLE "Characteristics" ADD COLUMN     "pet_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_CharacteristicsToPet";

-- AddForeignKey
ALTER TABLE "Characteristics" ADD CONSTRAINT "Characteristics_pet_id_fkey" FOREIGN KEY ("pet_id") REFERENCES "Pet"("pet_id") ON DELETE RESTRICT ON UPDATE CASCADE;
