"use client";
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc"; // Google
import { FaFacebook } from "react-icons/fa"; // Facebook
import { SignUp, SignUpButton } from "@clerk/nextjs"; // Clerk components
import styles from "../../styles/OtherPagesStyles/signUp.module.css";
import { Buttons } from "../Buttons";
import Link from "next/link";
import { ClerkProvider } from "@clerk/clerk-react";

export function SignUpForm() {
  return (
    // <SignUp/>
    //https://temp-mail.org/
    <div className={styles.FullBox}>
      <div className={styles.container}>
        <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-2xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Magic BookStore
          </h2>

          <SignUp
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
    // <div className={styles.FullBox}>
    //   <div className={styles.container}>
    //     <div className={styles.signUpBox}>
    //       {/* SignUp form using Clerk */}

    //         <h2 className={styles.title}>Sign Up</h2>

    //         {/* Nickname Input */}
    //         <div className={styles.inputBox}>
    //           <span className={styles.icon}>
    //             <AiOutlineUser size={20} />
    //           </span>
    //           <input
    //             type="text"
    //             required
    //             placeholder=""
    //             id="username"
    //             name="username"
    //           />
    //           <label>Nickname</label>
    //         </div>

    //         {/* Email Input */}
    //         <div className={styles.inputBox}>
    //           <span className={styles.icon}>
    //             <AiOutlineMail size={20} />
    //           </span>
    //           <input
    //             type="email"
    //             required
    //             placeholder=""
    //             id="email"
    //             name="email"
    //           />
    //           <label>Email</label>
    //         </div>

    //         {/* Password Input */}
    //         <div className={styles.inputBox}>
    //           <span className={styles.icon}>
    //             <AiOutlineLock size={20} />
    //           </span>
    //           <input
    //             type="password"
    //             required
    //             placeholder=""
    //             id="password"
    //             name="password"
    //           />
    //           <label>Password</label>
    //         </div>

    //         {/* Repeat Password Input */}
    //         <div className={styles.inputBox}>
    //           <span className={styles.icon}>
    //             <AiOutlineLock size={20} />
    //           </span>
    //           <input
    //             type="password"
    //             required
    //             placeholder=""
    //             id="passwordConfirmation"
    //             name="passwordConfirmation"
    //           />
    //           <label>Repeat Password</label>
    //         </div>

    //         {/* Sign up button */}
    //         <ClerkProvider>
    //         <SignUpButton>
    //           <Buttons className={styles.SignUpBtn}>Sign Up</Buttons>
    //         </SignUpButton>
    //         </ClerkProvider>

    //         {/* Link to Log In page */}
    //         <div className={styles.SignUpLink}>
    //           <p>
    //             Do you have an account? <Link href="/LogIn">Log In</Link>
    //           </p>
    //         </div>
    //         <br />
    //         <hr className="hr" />
    //         <div className={styles.SignUpLink}>
    //           <p>OR</p>
    //         </div>

    //         {/* Log in with Google */}
    //         <Buttons
    //           className={styles.googleBtn}
    //           onClick={() => signIn("google")}
    //         >
    //           <FcGoogle size={20} /> Sign up with Google
    //         </Buttons>

    //         {/* Log in with Facebook */}
    //         <Buttons
    //           className={styles.facebookBtn}
    //           onClick={() => signIn("facebook")}
    //         >
    //           <FaFacebook size={20} /> Sign up with Facebook
    //         </Buttons>
    //     </div>
    //   </div>
    // </div>
  );
}
