import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async(req: NextRequest) => {

    // Obtain the query for species searched.
    const requestedSpecies = req.nextUrl.searchParams.get("type");

    if (!requestedSpecies){
        return NextResponse.json({ message: "'species' and a string type value is required in the request!"}, {status: 400});
    }

    // Validate if the requested species' values only contain alphabets
    if (!requestedSpecies.match(/^[a-zA-Z]+$/)) {
        return NextResponse.json({message: "'species' query's value can only contain alphabets (no numbers) in the request!"}, {status: 400});
    }

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
        const requestedFilteredPets = await prisma.pet.findMany({
            where: {species: requestedSpecies.toLowerCase()},
            skip: offsetValue,
            take: requestedNumberOfPets
        });

        // Retrieve total number of pets
        const totalNumOfFilteredPets = await prisma.pet.count({where:{species:requestedSpecies}});

        return NextResponse.json({ message: "Success: ", requestedFilteredPets, totalNumOfFilteredPets}, {status: 200})
    } catch (error) {
        return NextResponse.json({ message: "Error", error}, {status: 500})
    }
}