import { NextResponse } from "next/server";

import { data } from "@/data/charcompdb";

export async function GET(req, res) {
  return NextResponse.json({
    data,
  });
}
