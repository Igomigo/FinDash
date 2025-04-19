import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    // const TokenCookie = await cookies();
    //const TokenCookie = request.cookies.get("token");
    //return Response.json({ message: "Hello Next" }, { status: 200 });
    redirect("https://taskpilot-36bs.onrender.com/login");
}