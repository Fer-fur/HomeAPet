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
  
  // Now you can use the 'applications' array with confidence
  const petApplicationData = applications.reduce((acc, application) => {
    const existingEntry = acc.find((entry) => entry.petURL === application.pet.petURL);

    if (existingEntry) {
        // If an entry with the same petURL exists, add the applicant details to the applicants array
        existingEntry.applicants.push({
        applicant_name: application.applicant_name,
        applicant_phone: application.applicant_phone,
        });
    } else {
        // If no entry with the same petURL exists, create a new entry
        acc.push({
        petURL: application.pet.petURL,
        applicants: [
            {
            applicant_name: application.applicant_name,
            applicant_phone: application.applicant_phone,
            },
        ],
        });
    }

    return acc;
    }, [] as { petURL: string; applicants: { applicant_name: string; applicant_phone: string }[] }[]);
        
    return NextResponse.json({message: "Success", petApplicationData}, {status: 200})

    } catch (error) {
        console.log(error);
        return NextResponse.json({error : error}, {status: 500});
    }
}