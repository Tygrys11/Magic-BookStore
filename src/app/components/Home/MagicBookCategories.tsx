"use client";
import { ImagesComponent } from "../ImageComponent";
import styles from "../../styles/newsletter.module.css";
import Image from "next/image";
import { useState } from "react";

const categories = [
  {
    title: "Ancient Grimoires",
    image: "/assets/book.png",
    description: "Books of spells, alchemy, and lost magical knowledge.",
  },
  {
    title: "Mythical Tales",
    image: "/assets/book.png",
    description: "Legends of dragons, heroes, and forgotten kingdoms.",
  },
  {
    title: "Potion Recipes",
    image: "/assets/book.png",
    description: "Brewing guides for elixirs of power and longevity.",
  },
  {
    title: "Divination & Prophecy",
    image: "/assets/book.png",
    description: "Unveil the future with tarot, runes, and star charts.",
  },
  {
    title: "Dark Arts & Curses",
    image: "/assets/book.png",
    description: "Forbidden texts filled with dangerous knowledge.",
  },
  {
    title: "Magical Creatures",
    image: "/assets/book.png",
    description: "A bestiary of enchanted beings and their secrets.",
  },
];

export default function MagicBookCategories() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubscribe = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setStatus("loading");

    setTimeout(() => {
      setStatus("subscribed");
    }, 1000);
  };

  return (
    <>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-purple-900 text-center">
            📚 Enchanted Book Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-purple-200 p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
              >
                <div className="relative w-full h-60">
                  <Image
                    src={category.image}
                    alt={category.title}
                    layout="fill"
                    className="rounded-lg object-cover"
                  />
                </div>
                <h3 className="mt-4 text-xl font-bold text-purple-800">
                  {category.title}
                </h3>
                <p className="text-gray-600 mt-2">{category.description}</p>
                <button className="mt-4 bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-900 transition">
                  Discover More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.newsletter}>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <h2 className={styles.title}>
                ✨ Join our magical newsletter! ✨
              </h2>
              <p>
                Stay up to date with new books, promotions, and magical events.
              </p>
              <form onSubmit={handleSubscribe} className={styles.form}>
                <div className={styles.inputContainer}>
                  <input
                    type="email"
                    placeholder="
                    Your magic email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.inputField}
                    required
                  />
                </div>
                <button type="submit" className={styles.button}>
                  {status === "loading" ? "Subscribed..." : "Sign Up"}
                </button>
              </form>
              {status === "subscribed" && (
                <p className={styles.successMessage}>
                  Thanks for signing up! 🎩✨
                </p>
              )}
            </div>
          </div>
          <ImagesComponent
            src="/assets/wizard.png"
            alt="wizard"
            className={styles.wizardImg}
          />
        </div>
      </section>
      <br />
    </>
  );
}
