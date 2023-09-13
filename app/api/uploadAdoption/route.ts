import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (req: NextRequest) => {
    const formData = await req.json();
    try {
        // Check if email exists in database
        const userData = await prisma.user.findUnique({
            where: { email : formData.email},
            select: { user_id : true}
        });

        if (!userData) {
            return NextResponse.json({ error: "Email not found."}, {status: 404});
        }

        // Check if its the same user applying for his/her own pet
        const petData = await prisma.pet.findUnique({
            where: {pet_id: formData.pet_id}
        });

        if(petData?.user_id == userData.user_id) {
            return NextResponse.json({ error: "You cannot apply for your own pet." }, { status: 400 })
        }

        const newApplication = await prisma.adoptionApplication.create({
            data: {
                applicant_name : formData.name,
                applicant_email: formData.email,
                applicant_phone: formData.phone,
                pet_id : formData.pet_id,
                application_status : "pending"
            }
        });
        return NextResponse.json({message: "Success: "}, {status: 201})
    } catch (error: any) {
        return NextResponse.json({message: "Error" , error}, {status: 500})
    }
}

