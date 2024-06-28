import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  const body = await request.json();

  const prefix = process.env.NODE_ENV === "development" ? "__Dev-" : "";

  const payload = {
    refreshToken: cookies().get(`${prefix}xxx.refresh-token`)?.value,
    userID: body.userID,
  };

  const res = await fetch(`${process.env.API_BASE_URL}/auth/refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  return NextResponse.json({
    success: res.ok,
    status: res.status,
    data,
  });
}
