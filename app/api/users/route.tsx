import { NextRequest, NextResponse } from "next/server";
import userSchema from "./schema";

export function GET(request: NextRequest) {

    const users = [
        {'id': 1, 'name': 'Abdul Rafey'},
        {'id': 2, 'name': 'Hammad Ahmed'},
    ]

    return NextResponse.json(users)
}

export async function POST(request: NextRequest) {

    const requestBody = await request.json()
    const validation = userSchema.safeParse(requestBody)
    if (!validation.success) {
        return NextResponse.json(
            validation.error.errors,
            {status: 400}
        )
    }
    return NextResponse.json(
        requestBody,
        {status: 201}
    )
}