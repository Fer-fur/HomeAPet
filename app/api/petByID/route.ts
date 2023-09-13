import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async(req: NextRequest) => {

    // Obtain the query for page number.
    const requestPetID = req.nextUrl.searchParams.get("pet_id");

    if (!requestPetID){
        return NextResponse.json({ message: "'pet_id' and a numerical value is required in the request!"}, {status: 400});
    }

    // Validate if the requested pages' values are be converted into integer
    if (isNaN(Number(requestPetID))) {
        return NextResponse.json({message: "'pet_id' query's value can only contain integers in the request!"}, {status: 400});
    }

    try {
        const requestedPet = await prisma.pet.findUnique({
            where: { pet_id: (Number(requestPetID))},
            include: {
                characteristics: true // Include the characteristics field
            }
        })

        return NextResponse.json({ message: "Success: ", requestedPet}, {status: 200})
    } catch (error) {
        return NextResponse.json({ message: "Error", error}, {status: 500})
    }
}