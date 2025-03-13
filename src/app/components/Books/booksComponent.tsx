"use client"
import React, { useEffect, useState } from "react";
import styles from "../../styles/OtherPagesStyles/books.module.css";

// Definiowanie typu książki
interface Book {
  key: string;
  title: string;
  author_name?: string[]; // Lista autorów, może być undefined
  cover_i?: number; // Identyfikator okładki książki (jeśli dostępny)
}

export default function Books() {
  // Typowanie stanu: books jako tablica Book, loading jako boolean, error jako string | null
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Funkcja do pobierania książek z Open Library API
    const fetchBooks = async () => {
      try {
        const res = await fetch("https://openlibrary.org/search.json?q=fantasy");
        const data = await res.json();

        // Sprawdzenie, czy istnieją książki w odpowiedzi i aktualizacja stanu
        if (data.docs) {
          setBooks(data.docs);
        }
        setLoading(false);
      } catch (err) {
        setError("Błąd podczas pobierania książek.");
        setLoading(false);
      }
    };

    fetchBooks(); // Uruchomienie funkcji pobierania książek
  }, []); // Uruchomienie tylko raz po załadowaniu komponentu

  if (loading) {
    return <div className={styles.loading}>Ładowanie książek...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.bookContainer}>
      <h1 className={styles.heading}>Moja Księgarnia</h1>
      <div className={styles.booksGrid}>
        {books.map((book) => {
          // Konstrukcja URL do okładki (jeśli dostępna)
          const coverUrl = book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
            : null;

          return (
            <div key={book.key} className={styles.bookCard}>
              {/* Wyświetlanie okładki książki */}
              {coverUrl && (
                <img src={coverUrl} alt={book.title} className={styles.bookCover} />
              )}
              <h3 className={styles.bookTitle}>{book.title}</h3>
              <p className={styles.bookAuthor}>
                {book.author_name ? book.author_name.join(", ") : "Autor nieznany"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
