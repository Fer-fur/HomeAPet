-- DropForeignKey
ALTER TABLE "Characteristics" DROP CONSTRAINT "Characteristics_pet_id_fkey";

-- AddForeignKey
ALTER TABLE "Characteristics" ADD CONSTRAINT "Characteristics_pet_id_fkey" FOREIGN KEY ("pet_id") REFERENCES "Pet"("pet_id") ON DELETE CASCADE ON UPDATE CASCADE;
