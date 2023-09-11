export const generateUrl = (path: string) => {
  return `${process.env.NEXT_PUBLIC_API_URL}${path}?userName=${process.env.NEXT_PUBLIC_USERNAME}`
}

export const generateLocalUrl = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_URL}${path}`
}