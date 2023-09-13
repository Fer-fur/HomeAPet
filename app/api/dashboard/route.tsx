import { jwt_token_name } from "@/constants";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

export const POST = async(req : NextRequest) => {
    const reqData = await req.json();
    let userEmail = reqData.user_email;

    try {
        // retrieve user data
        let userData = await prisma.user.findUnique({
            where: { email : userEmail },
        })

        // if userData / userEmail is missing, acquire the email again through the JWT
        if (userData == null) {
            
            const userCookies = cookies();

            const token = userCookies.get(jwt_token_name);

            //Retrieve secret key for JWT 
            const secret_key = process.env.JWT_SECRET_KEY;

            if (!token) {
                return NextResponse.json({isLoggedIn: false});
            }

            if (!secret_key) {
                throw new Error("JWT_SECRET_KEY environment variable is not set.");
            }

            try {
                const decodedToken = jwt.verify(token.value, secret_key);
        
                if (typeof decodedToken === 'object') {
                    userEmail = decodedToken.user.email;
                } else {
                    throw new Error('The token is not a valid JWT token.');
                }
                
            } catch (error) {
                return NextResponse.json({isLoggedIn: false});
            }

            // retrieve user data again
            userData = await prisma.user.findUnique({
                where: { email : userEmail },
            })
        }

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
        return NextResponse.json({error : error}, {status: 500});
    }
}