/**
 * convert JWT exp in  days
 * @param exp - number to be converted
 * @returns Converted exp in days;
 */
export function jwtExpirationDataConverter(exp: number): number {
  const currentTime = Math.floor(Date.now() / 1000)
  const secondsUntilExpiration = exp - currentTime
  const secondsInAday = 60 * 60 * 24
  const daysUntilExpiration = secondsUntilExpiration / secondsInAday
  return daysUntilExpiration
}
