"use client";
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc"; // Google
import { FaFacebook } from "react-icons/fa"; // Facebook
import styles from "../../styles/OtherPagesStyles/signUp.module.css";
import { Buttons } from "../Buttons";
import Link from "next/link";

export function SignUpForm() {
  return (
    <>
      <div className={styles.FullBox}>
        <div className={styles.container}>
          <div className={styles.signUpBox}>
            <form action="">
              <h2 className={styles.title}>Sign Up</h2>

              {/* Nickname Input */}
              <div className={styles.inputBox}>
                <span className={styles.icon}>
                  <AiOutlineUser size={20} />
                </span>
                <input type="text" required placeholder="" />
                <label>Nickname</label>
              </div>

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

              {/* Repeat Password Input */}
              <div className={styles.inputBox}>
                <span className={styles.icon}>
                  <AiOutlineLock size={20} />
                </span>
                <input type="password" required placeholder="" />
                <label>Repeat Password</label>
              </div>


              <Link href="/DashHome">
                <Buttons className={styles.SignUpBtn}>Sign Up</Buttons>
              </Link>
              <div className={styles.SignUpLink}>
                <p>
                  Do you have an account? <a href="/LogIn">Log In</a>
                </p>
              </div>
              <br />
            <hr />
            <div className={styles.SignUpLink}>
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
    </>
  );
}
