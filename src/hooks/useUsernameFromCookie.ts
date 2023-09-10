import { useEffect, useState } from 'react';

// Custom hook pro načtení hodnoty "username" z cookie
export function useUsernameFromCookie() {
  // Stavová proměnná pro uchování hodnoty "username"
  const [username, setUsername] = useState<string | null>(null);

  // Efekt, který načte hodnotu "username" z cookie při prvním načtení komponenty
  useEffect(() => {
    // Funkce pro načtení hodnoty z cookie
    function getCookie(name: string) {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) {
          return decodeURIComponent(cookieValue);
        }
      }
      return null;
    }

    // Načtení hodnoty "username" z cookie
    const savedUsername = getCookie('userName');

    // Uložení hodnoty do stavové proměnné
    setUsername(savedUsername || null);
  }, []); // Tento efekt se spustí jen při prvním načtení komponenty

  return username;
}