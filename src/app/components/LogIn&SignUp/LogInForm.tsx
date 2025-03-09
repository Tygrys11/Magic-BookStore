"use client";
import { SignIn, useUser } from "@clerk/clerk-react";
import styles from "../../styles/OtherPagesStyles/LogInStyles.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function LogInForm() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && user) {
      router.replace("/dashBoard/home");
    }
  }, [user, isLoaded, router]);
  return (
    <div className={styles.fullBox}>
      <div className={styles.container}>
        <div className={styles.LogInBox}>
          <div className={styles.form}>
            <h1 className={styles.h1}>✨Magic BookStore✨</h1>
            <SignIn
              appearance={{
                elements: {
                  formFieldLabel: "text-purple-600",
                  headerTitle: "text-white",
                  card: styles.LogInCard,
                  otpCodeFieldInput: styles.code,
                  formButtonPrimary: styles.LogInBtn,
                  inputField: styles.inputBox,
                  footerActionLink: styles.link,
                  socialButtonsBlockButton: styles.socialBtn,
                  footer: styles.LogInFooter,
                },
              }}
              afterSignUpUrl="/dashBoard/home"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
