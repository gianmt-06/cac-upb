export const compareDates = (providedDate: Date, realDate: Date): boolean => {
    if (
      providedDate.getFullYear() == realDate.getFullYear() &&
      providedDate.getMonth() == realDate.getMonth() &&
      providedDate.getDate() == realDate.getDate()
    ) {
      return false;
    }
    return true;
}