import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export const PUT =async (req : NextRequest) => {
    
    const formData = await req.json();

    console.log(formData.email);
    
    // Check if a volunteer with the same email exists
    const existingVolunteer = await prisma.volunteer.findFirst({
        where: {
        email: formData.email,
        },
    });

    if (existingVolunteer) {
        // Email already exists, return an error response
        return NextResponse.json({ message: 'Email already exists' }, { status: 400 });
    }

    await prisma.volunteer.create({
        data: {
            name : formData.name,
            email : formData.email,
            phone : formData.phone,
            interests : formData.interests
        }
    })

    return NextResponse.json({message : "Success"}, {status: 200})
}