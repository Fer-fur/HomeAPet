import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async(req : NextRequest) => {
    const reqData = await req.json();
    const userEmail = reqData.user_email;

    try {
        // obtain pet ID from application table
        const applications = await prisma.adoptionApplication.findMany({
            where: { applicant_email : userEmail },
            include: { 
                pet: true
            }
        })

        const petApplicationPhotos = applications.map((application) => application.pet.petURL);

        return NextResponse.json({message: "Success", petApplicationPhotos}, {status: 200})

    } catch (error) {
        console.log(error);
        return NextResponse.json({error : error}, {status: 500});
    }
}