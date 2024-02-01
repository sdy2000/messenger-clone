import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, password, confirm_password } = body;

    if (!email || !name || !password || !confirm_password)
      return new NextResponse("Missing info", { status: 400 });

    if (password !== confirm_password)
      return new NextResponse("Invalid Confirm Password", { status: 400 });

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });

    return NextResponse.json(user);
  } catch (err: any) {
    console.log(err, "REGISTRATION_ERROR");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
