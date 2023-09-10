export async function login(userName: string) {
  // Odeslání požadavku na server
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': '*/*',
    },
    // Odeslání dat ve formátu JSON
    body: JSON.stringify({ userName }),
  });
}