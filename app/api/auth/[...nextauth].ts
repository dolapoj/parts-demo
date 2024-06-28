// import { cookies, headers } from "next/headers";
// import NextAuth from "next-auth";
// import type { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { privateRoutes } from "@/constants/constants"; // an array like ["/", "/account"]

// async function refreshAccessToken(token) {
//   console.log("Now refreshing the expired token...");
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/refresh`, {
//       method: "POST",
//       headers: headers(),
//       body: JSON.stringify({ userID: token.userId })
//     });

//     const { success, data } = await res.json();

//     if (!success) {
//       console.log("The token could not be refreshed!");
//       throw data;
//     }

//     console.log("The token has been refreshed successfully.");

//     const decodedAccessToken = JSON.parse(Buffer.from(data.accessToken.split(".")[1], "base64").toString());

//     return {
//       ...token,
//       accessToken: data.accessToken,
//       refreshToken: data.refreshToken ?? token.refreshToken,
//       idToken: data.idToken,
//       accessTokenExpires: decodedAccessToken["exp"] * 1000,
//       error: "",
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       ...token,
//       error: "RefreshAccessTokenError",
//     };
//   }
// }

// export const authOptions: NextAuthOptions = {
//   trustHost: true,
//   theme: {
//     logo: "https://next-auth.js.org/img/logo/logo-sm.png",
//   },
//   providers: [
//     CredentialsProvider({
//       credentials: {
//         email: {
//           label: "email",
//           type: "email",
//           placeholder: "jsmith@example.com",
//         },
//         password: {
//           label: "password",
//           type: "password",
//         },
//       },
//       async authorize(credentials) {
//         const payload = {
//           email: credentials.email,
//           password: credentials.password,
//         };

//         const res = await fetch(`${process.env.API_BASE_URL}/auth/login`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(payload),
//         });

//         const user = await res.json();

//         if (!res.ok) {
//           throw new Error(user.message);
//         }

//         if (res.ok && user) {
//           const prefix = process.env.NODE_ENV === "development" ? "__Dev-" : "";

//           cookies().set({
//             name: `${prefix}xxx.refresh-token`,
//             value: user.refreshToken,
//             httpOnly: true,
//             sameSite: "strict",
//             secure: true,
//           });

//           return user;
//         }

//         return null;
//       }
//     })
//   ],
//   secret: process.env.AUTH_SECRET,
//   pages: {
//     signIn: "/login",
//   },
//   callbacks: {
//     async jwt({ token, user, account }) {
//       if (account && user) {
//         token.id = user.id;
//         token.accessToken = user.accessToken;
//         token.refreshToken = user.refreshToken;
//         token.role = "Unknown";

//         const decodedAccessToken = JSON.parse(Buffer.from(user.accessToken.split(".")[1], "base64").toString());

//         if (decodedAccessToken) {
//           token.userId = decodedAccessToken["sub"] as string;
//           token.accessTokenExpires = decodedAccessToken["exp"] * 1000;
//         }

//         const decodedIdToken = JSON.parse(Buffer.from(user.idToken.split(".")[1], "base64").toString());

//         if (decodedIdToken) {
//           token.email = decodedIdToken["email"];
//           token.cognitoGroups = decodedIdToken["cognito:groups"];
//           token.role = decodedIdToken["cognito:groups"].length ? decodedIdToken["cognito:groups"][0] : "Unknown";
//         }
//       }

//       if (token.accessTokenExpires && (Date.now() < Number(token.accessTokenExpires))) {
//         const { refreshToken, ...rest } = token;
//         return rest;
//       }

//       return await refreshAccessToken(token);
//     },
//     async session({ session, token }) {
//       return {
//         ...session,
//         user: {
//           ...session.user,
//           id: token.id as string,
//           email: token.email as string,
//           cognitoGroups: token.cognitoGroups as string[],
//           accessToken: token.accessToken as string,
//           accessTokenExpires: token.accessTokenExpires as number,
//           role: token.role as string
//         },
//         error: token.error,
//       };
//     },
//     async authorized({ request, auth }) {
//       const { pathname } = request.nextUrl;
//       const searchTerm = request.nextUrl.pathname.split("/").slice(0, 2).join("/");

//       if (privateRoutes.includes(searchTerm)) {
//         console.log(`${!!auth ? "Can" : "Cannot"} access private route ${searchTerm}`);
//         return !!auth;
//       } else if (pathname.startsWith("/login") || pathname.startsWith("/forgot-password") || pathname.startsWith("/signup")) {
//         const isLoggedIn = !!auth;
//         if (isLoggedIn) {
//           return Response.redirect(new URL("/", request.nextUrl));
//         }
//         return true;
//       }

//       return true;
//     },
//   },
//   debug: process.env.NODE_ENV === "development",
// };

// export default NextAuth(authOptions);
