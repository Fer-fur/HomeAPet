import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async ( req: Request, res: Response) => {
    try {
        const allUsers = await prisma.user.findMany()
        return NextResponse.json({ message: "Success: ", allUsers}, {status: 200})
    } catch (error) {
        return NextResponse.json({ message: "Error", error}, {status: 500})
    }
};

export const POST = async (req: Request) => {

    try {
        console.log("test");
        const newUser = await prisma.user.create({
            data: {
                email: 'test2@test.com',
                username: 'testtetst',
                password: '123456',
            }
        });
        return NextResponse.json({message: "Success: ", newUser}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: "Error" , error}, {status: 500})
    }
}
