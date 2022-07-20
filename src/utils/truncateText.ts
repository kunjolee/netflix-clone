
export const truncateDesc = (str = "", num: number) => {
  return (
    str?.length > num 
      ? str.substring(0, num - 1) + "..."
      : str
  )
}


export const truncText = (text: string, start: number, end: number): string => {
  return text.substring(start, end);
}