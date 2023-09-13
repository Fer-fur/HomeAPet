import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from 'bcrypt';
import { jwt_token_name } from "@/constants";
import jwt from 'jsonwebtoken';

export const POST = async (req : NextRequest) => {

    const loginData = await req.json();

    try {
        // Check if email exists
        const user = await prisma.user.findUnique({
            where: { email: loginData.email},
            select: { 
                email: true, 
                password: true
            },
        });

        if (!user) {
            return NextResponse.json({ error: "Email not found."}, {status: 404})
        }

        // Check Password
        const password = String(loginData.password);
        const passwordResults = await bcrypt.compareSync(password, user.password);
        
        if (!passwordResults) {
            return NextResponse.json(
                {error: "Incorrect password."},
                {status: 401}
            )
        }

        // ---- Cleared Authentication ----

        // Retrieve secret key for JWT 
        const secret_key = process.env.JWT_SECRET_KEY;

        // Check if secret_key is defined
        if(!secret_key){
            throw new Error('JWT_SECRET_KEY environment variable is not set.');
        }

        const payload = { user: {
                                email: user.email,
        }}
        const token = jwt.sign( payload,
                            secret_key,
                            {expiresIn: '1d'});

        const res = NextResponse.json(
            {message: "Login Successfully.", user}, 
            {status: 200 },
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