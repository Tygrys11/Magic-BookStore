"use client"
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc"; // Google
import { FaFacebook } from "react-icons/fa"; // Facebook
import { SignIn, useSignIn } from '@clerk/nextjs'
import styles from "../../styles/OtherPagesStyles/logIn.module.css";
import { Buttons } from "../Buttons"; 
import Link from "next/link";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export function LogInForm() {
  return (
    // <SignIn />
    <div className={styles.FullBox}>
      <div className={styles.container}>
        <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-2xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Magic BookStore
          </h2>

          <SignIn
            appearance={{
              elements: {
                formButtonPrimary:
                  "w-full py-3 px-6 mt-6 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500",
                formFieldInput:
                  "px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                formFieldLabel: "block text-sm font-medium text-gray-700",
                formWrapper: "bg-white p-8 rounded-2xl shadow-2xl",
                heading: "text-3xl font-bold text-center text-gray-800 mb-8",
              },
            }}
          />
        </div>
      </div>
    </div>
    // <html lang="en">
    //   <body>
        
    //     <div className={styles.FullBox}>
    //       <div className={styles.container}>
    //         <div className={styles.loginBox}>
    //           <form>
    //             <h2 className={styles.title}>Login</h2>

    //             {/* Email Input */}
    //             <div className={styles.inputBox}>
    //               <span className={styles.icon}>
    //                 <AiOutlineMail size={20} />
    //               </span>
    //               <input type="email" required placeholder="" id="email" />
    //               <label>Email</label>
    //             </div>

    //             {/* Password Input */}
    //             <div className={styles.inputBox}>
    //               <span className={styles.icon}>
    //                 <AiOutlineLock size={20} />
    //               </span>
    //               <input type="password" required placeholder="" id="password" />
    //               <label>Password</label>
    //             </div>
    //             <div className={styles.rememberForgot}>
    //               <label>
    //                 <input type="checkbox" name="" id="" />
    //                 Remember me
    //               </label>
    //               <a href="#">Forgot Password?</a>
    //             </div>
    //             <br />

    //             {/* Use Clerk SignIn component */}
    //             <ClerkProvider>
                  
    //                 <SignInButton>
    //                   <Buttons className={styles.LogInBtn}>Log In</Buttons>
    //                 </SignInButton>
                 
    //             </ClerkProvider>

    //             <div className={styles.registerLink}>
    //               <p>
    //                 Don't have an account? <a href="/SignUp">Register</a>
    //               </p>
    //             </div>
    //             <br />
    //             <hr />
    //             <div className={styles.registerLink}>
    //               <p>
    //                 OR
    //               </p>
    //             </div>

    //             {/* Log in with Google */}
    //             <Buttons
    //               className={styles.googleBtn}
    //               onClick={() => signIn("google")}
    //             >
    //               <FcGoogle size={20} /> Log in with Google
    //             </Buttons>

    //             {/* Log in with Facebook */}
    //             <Buttons
    //               className={styles.facebookBtn}
    //               onClick={() => signIn("facebook")}
    //             >
    //               <FaFacebook size={20} /> Log in with Facebook
    //             </Buttons>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </body>
    // </html>
  );
}
