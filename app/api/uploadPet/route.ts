import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async( req: NextRequest) => {

    const petData = await req.json();

    // Check if user is logged in
    try {
        const petOwner = await prisma.user.findUnique({
            where: {email : petData.owner},
            select: {
                user_id: true,
            }
        })

        if(petOwner?.user_id != null){
            // Uploads data into the database
            try {
                const newPet = await prisma.pet.create({
                    data: {
                        name: petData.name.toLowerCase(),
                        species: petData.type.toLowerCase(),
                        breed: petData.breed.toLowerCase(),
                        color: petData.color.toLowerCase(),
                        gender: petData.gender.toLowerCase(),
                        age: petData.age.toLowerCase(),
                        medical_condition: petData.medical_condition,
                        description: petData.reason,
                        petURL: petData.petImgUrl,
                        characteristics: {
                            create: {
                            children_friendly: petData.characteristics.includes("Children Friendly"),
                            house_trained: petData.characteristics.includes("House-trained"),
                            live_with_pets: petData.characteristics.includes("Can live with other pets"),
                            good_with_commands: petData.characteristics.includes("Good with Commands"),
                            separation_anxiety: petData.characteristics.includes("Separation Anxiety"),
                            knows_tricks: petData.characteristics.includes("Knows Tricks"),
                            indoor_preference: petData.characteristics.includes("Indoor preference"),
                            toilet_trained: petData.characteristics.includes("Toilet-Trained"),
                            vaccinated: petData.characteristics.includes("Vaccinated"),
                            },
                        },
                        user_id: petOwner.user_id
                    }
                });
                
                return NextResponse.json({message: "Success: ", }, {status: 201})
            } catch (error) {
                // Handle the error here
                console.error("Error:", error);
                return NextResponse.json({ message: "Error", error}, {status: 500})
            }
        }
        
    } catch (error) {
        // if user is not logged in, redirect user to login/register page 
        
        // Obtain the current URL
        const currentURL = String(req.nextUrl);
        // Remove the pathnames behind the current domain
        const currentDomain = currentURL.split("/api")[0];

        return NextResponse.redirect(currentDomain +  "/login-register", {status: 302})
    }

}
