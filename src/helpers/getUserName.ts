export function getUserName(): string {
  return process.env.NEXT_PUBLIC_USERNAME || '';
}
