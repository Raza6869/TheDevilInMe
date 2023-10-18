import { data } from "@/data/charcompdb";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  return NextResponse.json(data);
}
