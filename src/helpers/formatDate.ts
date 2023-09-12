export const formatDate = (date: Date) => {
  // to format date to YYYY-MM-DDTHH:MM
  return new Date(date).toISOString().slice(0, 19)
}