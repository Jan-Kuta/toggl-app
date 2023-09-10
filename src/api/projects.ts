
export async function getProjects() {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects?userName=${process.env.NEXT_PUBLIC_USERNAME}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': '*/*',
    },
  });
}
