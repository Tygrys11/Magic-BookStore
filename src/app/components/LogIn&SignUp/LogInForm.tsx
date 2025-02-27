"use client"
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc"; // Google
import { FaFacebook } from "react-icons/fa"; // Facebook
import { signIn } from "next-auth/react"; 
import styles from "../../styles/OtherPagesStyles/logIn.module.css";
import { Buttons } from "../Buttons"; 
import Link from "next/link";

export function LogInForm() {
  return (
    <div className={styles.FullBox}>
      <div className={styles.container}>
        <div className={styles.loginBox}>
          <form action="">
            <h2 className={styles.title}>Login</h2>

            {/* Email Input */}
            <div className={styles.inputBox}>
              <span className={styles.icon}>
                <AiOutlineMail size={20} />
              </span>
              <input type="email" required placeholder="" />
              <label>Email</label>
            </div>

            {/* Password Input */}
            <div className={styles.inputBox}>
              <span className={styles.icon}>
                <AiOutlineLock size={20} />
              </span>
              <input type="password" required placeholder="" />
              <label>Password</label>
            </div>
            <div className={styles.rememberForgot}>
              <label>
                <input type="checkbox" name="" id="" />
                Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div>
            <br />

            {/* Przycisk Logowania */}
            <Link href="/">
              <Buttons className={styles.LogInBtn}>Log In</Buttons>
            </Link>

            <div className={styles.registerLink}>
              <p>
                Don't have an account? <a href="/SignUp">Register</a>
              </p>
            </div>
            <br />
            <hr />
            <div className={styles.registerLink}>
              <p>
                OR
              </p>
            </div>

            {/* Zaloguj się przez Google */}
            <Buttons
              className={styles.googleBtn}
              onClick={() => signIn("google")}
            >
              <FcGoogle size={20} /> Log in with Google
            </Buttons>

            {/* Zaloguj się przez Facebook */}
            <Buttons
              className={styles.facebookBtn}
              onClick={() => signIn("facebook")}
            >
              <FaFacebook size={20} /> Log in with Facebook
            </Buttons>
          </form>
        </div>
      </div>
    </div>
  );
}
