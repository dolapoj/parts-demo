'use client'
import { NextResponse } from "next/server";

async function fetchParts() {
  const endpoint = "http://partdirectafrica.com/part/parts-list";
  const response = await fetch(endpoint, {
    method: "GET",
  });

  const parts = await response.json();
  return parts;
}

export async function GET(request: any) {
  const parts = await fetchParts();
  return NextResponse.json(parts);
}
