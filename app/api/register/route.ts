import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { jwt_token_name } from "@/constants";

export const GET = async ( req: NextRequest, res: NextResponse) => {
    try {
        const allUsers = await prisma.user.findMany()
        return NextResponse.json({ message: "Success: ", allUsers}, {status: 200})
    } catch (error) {
        return NextResponse.json({ message: "Error", error}, {status: 500})
    }
};

export const PUT = async (req: NextRequest) => {
    const formData = await req.json();
    try {
        // Check if email already exists
        const existingUser = await prisma.user.findUnique({
            where: { email : formData.email},
            select: { email : true}
        });
        if (existingUser) {
            return NextResponse.json({error: 'Email already exists'}, { status: 409});
        }

        // Password Hashing
        const saltRounds = 10;
        const hashPassword = await bcrypt.hash(formData.password, saltRounds); 

        const newUser = await prisma.user.create({
            data: {
                email: formData.email,
                username: formData.username,
                password: hashPassword,
            }
        });
        return NextResponse.json({message: "Success: ", }, {status: 201})
    } catch (error: any) {
        return NextResponse.json({message: "Error" , error}, {status: 500})
    }
}

