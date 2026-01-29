// Shared date constants used across the site
// This ensures consistent timing between Canary status and API launch countdown

// The canary updates on the 27th of each month
export const CANARY_UPDATE_DAY = 27

// API public launch date - correlates with canary schedule
// Set to the 27th of the target launch month
export const API_LAUNCH_DATE = new Date('2026-02-27T00:00:00Z')

// Get the last canary update date (27th of current or previous month)
export function getLastCanaryUpdate(): Date {
  const now = new Date()
  const currentDay = now.getUTCDate()
  const currentMonth = now.getUTCMonth()
  const currentYear = now.getUTCFullYear()
  
  if (currentDay >= CANARY_UPDATE_DAY) {
    // We're past the 27th, so last update was this month
    return new Date(Date.UTC(currentYear, currentMonth, CANARY_UPDATE_DAY))
  } else {
    // We're before the 27th, so last update was previous month
    const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1
    const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear
    return new Date(Date.UTC(prevYear, prevMonth, CANARY_UPDATE_DAY))
  }
}

// Get the next canary update date (27th of current or next month)
export function getNextCanaryUpdate(): Date {
  const now = new Date()
  const currentDay = now.getUTCDate()
  const currentMonth = now.getUTCMonth()
  const currentYear = now.getUTCFullYear()
  
  if (currentDay >= CANARY_UPDATE_DAY) {
    // We're past the 27th, so next update is next month
    const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1
    const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear
    return new Date(Date.UTC(nextYear, nextMonth, CANARY_UPDATE_DAY))
  } else {
    // We're before the 27th, so next update is this month
    return new Date(Date.UTC(currentYear, currentMonth, CANARY_UPDATE_DAY))
  }
}

// Format date as DD.MM.YY
export function formatDateShort(date: Date): string {
  const day = String(date.getUTCDate()).padStart(2, '0')
  const month = String(date.getUTCMonth() + 1).padStart(2, '0')
  const year = String(date.getUTCFullYear()).slice(-2)
  return `${day}.${month}.${year}`
}

// Calculate countdown to a target date
export function getCountdown(targetDate: Date): { days: number; hours: number; mins: number; secs: number } {
  const now = new Date()
  const diff = targetDate.getTime() - now.getTime()
  
  if (diff <= 0) {
    return { days: 0, hours: 0, mins: 0, secs: 0 }
  }
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const secs = Math.floor((diff % (1000 * 60)) / 1000)
  
  return { days, hours, mins, secs }
}
