import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let data = await req.formData();
  console.log(data, "yeh hai data");

  return NextResponse.json({ msg: "kill bill" });
}
