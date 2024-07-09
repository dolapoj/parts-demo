// 'use client'
// import { NextResponse } from "next/server";

// async function fetchParts() {
//   const endpoint = "http://partdirectafrica.com/part/parts-list";
//   const response = await fetch(endpoint, {
//     method: "GET",
//   });

//   const parts = await response.json();
//   return parts;
// }

// export async function GET(request: any) {
//   const parts = await fetchParts();
//   return NextResponse.json(parts);
// }

import { NextResponse } from 'next/server';

async function fetchParts() {
  const endpoint = "http://partdirectafrica.com/part/parts-list";
  const response = await fetch(endpoint, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const parts = await response.json();
  return parts;
}

export async function GET() {
  try {
    const parts = await fetchParts();
    return NextResponse.json(parts);
  } catch (error) {
    console.error("Error fetching parts:", error);
    return NextResponse.json({ error: "Failed to fetch parts" }, { status: 500 });
  }
}

