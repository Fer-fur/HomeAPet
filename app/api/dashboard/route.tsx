import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async(req : NextRequest) => {
    const reqData = await req.json();
    const userEmail = reqData.user_email;

    try {
        // retrieve adoption data
        const adoptApplications = await prisma.adoptionApplication.findMany({
            where: { applicant_email : userEmail },
            include: { 
                pet: true
            }
        })

        // using an array.map function to create a new array to store the petURL, pet name and breed.
        const petAdoptionApplicationData = adoptApplications.map((application) => ({
            petURL : application.pet.petURL,
            petName : application.pet.name,
            petBreed : application.pet.breed,
        }));

        // retrieve user data
        const userData = await prisma.user.findUnique({
            where: { email : userEmail },
        })

        // Using user_id to retrieve the user's listed pets
        const petsData = await prisma.pet.findMany({
            where: { user_id : userData?.user_id},
            include: { applications: true }
        })

        // With the listed pets data, modify the data structure to only return what is needed
        const rehomingApplicantsData = petsData.map((pet) => ({
            petURL : pet.petURL,
            applicants: pet.applications.map((applicant) => ({
                applicant_name: applicant.applicant_name,
                applicant_phone: applicant.applicant_phone
            }))
        }))

        // Retrieve the volunteer status
        const volunteerApplication = await prisma.volunteer.findFirst({
            where: {
                email : userEmail
            }
        })

        let volunteerApplicationData:boolean = false;

        if (volunteerApplication != null) {
            volunteerApplicationData = true;
        }

        return NextResponse.json({message: "Success", petAdoptionApplicationData, rehomingApplicantsData, volunteerApplicationData}, {status: 200})

    } catch (error) {
        console.log(error);
        return NextResponse.json({error : error}, {status: 500});
    }
}