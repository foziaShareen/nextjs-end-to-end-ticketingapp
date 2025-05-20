import { NextRequest } from "next/server";

import { NextResponse } from "next/server";
import { weaponScehma } from "../../../../validationSchemas/weapon";
import { prisma } from "../../../../prisma/db";
export async function POST(request:NextRequest){
    const body = await request.json();
    const validation = weaponScehma.safeParse(body);
    if(!validation.success){
        return NextResponse.json({error:validation.error.format()},{status:400});
    }
    const newWeapon = await prisma.weapon.create({
        data:{...body}
    })
    return NextResponse.json(newWeapon,{status:201});
}