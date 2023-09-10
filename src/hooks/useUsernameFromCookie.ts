import { useEffect, useState } from 'react';

// Custom hook pro načtení hodnoty "username" z cookie
export function useUsernameFromLS() {
  return localStorage
    ? localStorage.getItem('userName') || '' : ''
}