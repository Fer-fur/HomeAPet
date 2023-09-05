/*
  Warnings:

  - Added the required column `toilet_trained` to the `Characteristics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vaccinated` to the `Characteristics` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `children_friendly` on the `Characteristics` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `house_trained` on the `Characteristics` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `live_with_pets` on the `Characteristics` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `good_with_commands` on the `Characteristics` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `separation_anxiety` on the `Characteristics` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `knows_tricks` on the `Characteristics` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `indoor_preference` on the `Characteristics` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Characteristics" ADD COLUMN     "toilet_trained" BOOLEAN NOT NULL,
ADD COLUMN     "vaccinated" BOOLEAN NOT NULL,
DROP COLUMN "children_friendly",
ADD COLUMN     "children_friendly" BOOLEAN NOT NULL,
DROP COLUMN "house_trained",
ADD COLUMN     "house_trained" BOOLEAN NOT NULL,
DROP COLUMN "live_with_pets",
ADD COLUMN     "live_with_pets" BOOLEAN NOT NULL,
DROP COLUMN "good_with_commands",
ADD COLUMN     "good_with_commands" BOOLEAN NOT NULL,
DROP COLUMN "separation_anxiety",
ADD COLUMN     "separation_anxiety" BOOLEAN NOT NULL,
DROP COLUMN "knows_tricks",
ADD COLUMN     "knows_tricks" BOOLEAN NOT NULL,
DROP COLUMN "indoor_preference",
ADD COLUMN     "indoor_preference" BOOLEAN NOT NULL;
