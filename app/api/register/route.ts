import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { jwt_token_name } from "@/constants";

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

        // ---- Cleared Authentication ----

        // Retrieve secret key for JWT 
        const secret_key = process.env.JWT_SECRET_KEY;

        // Check if secret_key is defined
        if(!secret_key){
            throw new Error('JWT_SECRET_KEY environment variable is not set.');
        }

        const payload = { user: {
                                email: newUser.email,
        }}
        const token = jwt.sign( payload,
                            secret_key,
                            {expiresIn: '1d'});

        const res = NextResponse.json(
            {message: "Sign Up Successful."}, 
            {status: 201 },
        )

        res.cookies.set(jwt_token_name, 
                        token, 
                        {
                            httpOnly: true, 
                            sameSite: 'strict',
                        });

        return res;
    } catch (error: any) {
        return NextResponse.json({message: "Error" , error}, {status: 500})
    }
}

