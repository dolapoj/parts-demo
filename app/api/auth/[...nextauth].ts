// import NextAuth, { DefaultSession } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import axios from "axios";

// declare module "next-auth" {
//   interface User extends DefaultUser {
//     accessToken?: string;
//   }

//   interface Session extends DefaultSession {
//     accessToken?: string;
//   }

//   interface JWT {
//     id?: string;
//     email?: string;
//     accessToken?: string;
//   }
// }


// export default NextAuth({
//   providers: [
//     CredentialsProvider({
//       // The name to display on the sign-in form
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       authorize: async (credentials) => {
//         try {
//           // Replace with your backend API URL
//           const res = await axios.post(
//             "http://partdirectafrica.com/auth/login/",
//             {
//               email: credentials?.email,
//               password: credentials?.password,
//             }
//           );

//           const user = res.data;

//           if (!user) {
//             throw new Error("Invalid credentials");
//           }

//           //Return the user object
//           return user;
//         } catch (error) {
//           console.log(error);
//           return null;
//         }
//       },
//     }),
//   ],
//   pages: {
//       signIn: '/login',
//   },
//   callbacks: {
//       async jwt({ token, user }) {
//             if (user) {
//                   token.id = user.id;
//                   token.email = user.email;
//                   token.accessToken = user.accessToken;
//             }
//             return token;
//       },
//       async session({ session, token }) {
//             session.user.id = token.id;
//             session.user.email = token.email;
//             session.accessToken = token.accessToken;
//             return session;
//       }
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// });
