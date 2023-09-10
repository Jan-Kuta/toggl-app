export function getUserName(): string {
  return localStorage
    ? localStorage.getItem('userName') || '' : ''
}
