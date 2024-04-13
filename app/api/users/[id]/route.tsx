import { NextRequest, NextResponse } from "next/server";
import userSchema from "../schema";

interface Props {
    params: {
        id: number
    }
}

export function GET(request: NextRequest, props: Props) {

    if (props.params.id > 10) {
        return NextResponse.json(
            {error: 'User not found'},
            {status: 404}
        )
    }
    return NextResponse.json({
        id: props.params.id, name: 'Abdul Rafey'
    })
}

export async function PUT(request: NextRequest, props: Props) {

    const requestBody = await request.json()
    const validation = userSchema.safeParse(requestBody)
    if (!validation.success) {
        return NextResponse.json(
            validation.error.errors,
            {status: 400}
        )
    }
    if (props.params.id > 10) {
        return NextResponse.json(
            {error: 'User not found'},
            {status: 404}
        )
    }
    return NextResponse.json(
        {id: 1, name: requestBody.name}
    )
}

export function DELETE(request: NextRequest, props: Props) {

    if (props.params.id > 10) {
        return NextResponse.json(
            {error: 'User not found'},
            {status: 404}
        )
    }
    return NextResponse.json({})
}