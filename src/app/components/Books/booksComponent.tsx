"use client";
import React, { useEffect, useState } from "react";
import styles from "../../styles/OtherPagesStyles/books.module.css";

// Definiowanie typu książki
interface Book {
  key: string;
  title: string;
  author_name?: string[]; // Lista autorów, może być undefined
  cover_i?: number; // Identyfikator okładki książki (jeśli dostępna)
}

export default function Books() {
  const [books, setBooks] = useState<Book[]>([]); // Tablica książek
  const [loading, setLoading] = useState<boolean>(true); // Stan ładowania
  const [error, setError] = useState<string | null>(null); // Błąd
  const [page, setPage] = useState<number>(1); // Numer strony
  const [totalBooks, setTotalBooks] = useState<number>(0); // Łączna liczba książek
  const [limit, setLimit] = useState<number>(100); // Limit książek na stronie

  // Funkcja do pobierania książek z Open Library API
  const fetchBooks = async () => {
    try {
      setLoading(true); // Rozpoczynamy ładowanie
      const res = await fetch(`https://openlibrary.org/search.json?q=harry%20potter&limit=${limit}&page=${page}`);
      
      if (!res.ok) {
        throw new Error(`Błąd API: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      // Sprawdzamy, czy w odpowiedzi znajdują się książki
      if (data.docs) {
        setBooks(data.docs); // Ustawiamy nowe książki dla nowej strony
        setTotalBooks(data.num_found); // Ustawiamy łączną liczbę książek
      } else {
        throw new Error("Brak książek w odpowiedzi");
      }
    } catch (err: any) {
      setError(`Błąd podczas pobierania książek: ${err.message}`);
    } finally {
      setLoading(false); // Zakończymy ładowanie
    }
  };

  // Ładowanie książek przy załadowaniu komponentu lub zmianie strony
  useEffect(() => {
    setBooks([]); // Czyszczenie książek przed załadowaniem nowych
    fetchBooks();
  }, [page]); // Zmieniamy stronę w zależności od numeru strony

  // Funkcja do przejścia na poprzednią stronę
  const goToPreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  // Funkcja do przejścia na następną stronę
  const goToNextPage = () => {
    if (books.length < totalBooks) {
      setPage(page + 1);
    }
  };

  if (loading && page === 1) {
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
              {coverUrl && <img src={coverUrl} alt={book.title} className={styles.bookCover} />}
              <h3 className={styles.bookTitle}>{book.title}</h3>
              <p className={styles.bookAuthor}>
                {book.author_name ? book.author_name.join(", ") : "Autor nieznany"}
              </p>
            </div>
          );
        })}
      </div>

      {/* Paginacja */}
      <div className={styles.pagination}>
        <button
          onClick={goToPreviousPage}
          disabled={page === 1}
          className={styles.paginationButton}
        >
          Poprzednia
        </button>

        <span className={styles.pageInfo}>
          Strona {page} z {Math.ceil(totalBooks / limit)}
        </span>

        <button
          onClick={goToNextPage}
          disabled={books.length >= totalBooks}
          className={styles.paginationButton}
        >
          Następna
        </button>
      </div>
    </div>
  );
}
