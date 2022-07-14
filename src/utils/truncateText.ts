
export const truncateDesc = (str = "", num: number) => {
  return (
    str?.length > num 
      ? str.substring(0, num - 1) + "..."
      : str
  )
}