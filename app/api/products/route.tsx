import { NextRequest, NextResponse } from "next/server";
import productSchema from "./schema";

export function GET(request: NextRequest) {

    const products = [
        {id: 1, name: 'Milk', price: 2.5},
        {id: 2, name: 'Bread', price: 3.5},
    ]
    return NextResponse.json(products)
}

export async function POST(request: NextRequest) {

    const requestBody = await request.json()
    const validation = productSchema.safeParse(requestBody)
    if (!validation.success) {
        return NextResponse.json(
            validation.error.errors,
            {status: 400}
        )
    }
    return NextResponse.json(
        {id: 3, name: requestBody.name, price: requestBody.price},
        {status: 201}
    )
}
