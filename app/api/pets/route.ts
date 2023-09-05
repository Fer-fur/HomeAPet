import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async(req: NextRequest) => {

    // Obtain the query for page number.
    const requestedPages = req.nextUrl.searchParams.get("page");

    if (!requestedPages){
        return NextResponse.json({ message: "'page' and a numerical value is required in the request!"}, {status: 400});
    }

    // Validate if the requested pages' values are be converted into integer
    if (isNaN(Number(requestedPages))) {
        return NextResponse.json({message: "'page' query's value can only contain integers in the request!"}, {status: 400});
    }

    try {
        const requestedNumberOfPets = 10;

        // Offset the page number and retrieve the amount needed by page size
        const offsetValue = (Number(requestedPages) - 1) * requestedNumberOfPets;

        // Retrieve request amount of pets with pagination
        const requestedPets = await prisma.pet.findMany({
            skip: offsetValue,
            take: requestedNumberOfPets,
            include: {
                characteristics: true // Include the characteristics field
            }
        });

        // Retrieve total number of pets
        const totalNumOfPets = await prisma.pet.count();

        return NextResponse.json({ message: "Success: ", requestedPets, totalNumOfPets}, {status: 200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error", error}, {status: 500})
    }
}