import { NextResponse } from "next/server";
import { weaponScehma } from "../../../../../validationSchemas/weapon";
import { prisma } from "../../../../../prisma/db";



interface Props {
    params: {id:string}}
export async function PATCH(request:Request, {params}:Props) {
   const body= await request.json()
    const validation = weaponScehma.safeParse(body);
    if (!validation.success) {
        return NextResponse.json({ error: validation.error.format() }, { status: 400 });
    }
    const weapon = await prisma.weapon.findUnique({
        where: {
            id: parseInt(params.id),//params.id
        }
    })
    if (!weapon) {
        return NextResponse.json({ error: "Weapon not found" }, { status: 404 });
    }
   const updateweapon= await prisma.weapon.update({
        where: {
            id: weapon.id,//params.id
        },
        data: {
            ...body
        }
    })
    return NextResponse.json(updateweapon);
}