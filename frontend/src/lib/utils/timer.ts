export interface CountdownData {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  phase: number;
  dateStr: string;
}

export function getCountdownData(slug: string): CountdownData {
  // 1. Reference Tuesday: July 14, 2026, 00:00:00 AM IST (July 13, 18:30:00 UTC) for Phase calculation
  const EPOCH_UTC = Date.UTC(2026, 6, 13, 18, 30, 0);
  const ONE_WEEK = 7 * 24 * 60 * 60 * 1000;

  const nowUtc = Date.now();
  const diff = nowUtc - EPOCH_UTC;
  const diffWeeks = diff / ONE_WEEK;
  const weekIndex = Math.floor(diffWeeks);

  // 2. Loop week (0, 1, 2, 3)
  const loopWeek = ((weekIndex % 4) + 4) % 4;

  let phase = 1;
  const decodedSlug = decodeURIComponent(slug);
  if (decodedSlug === "digital-growth-&-marketing") {
    phase = ((loopWeek + 1) % 4) + 1;
  } else {
    phase = loopWeek + 1;
  }

  // 3. Get current time & date strictly in Indian Standard Time (IST, UTC + 5:30)
  const IST_OFFSET = 5.5 * 60 * 60 * 1000;
  const istDate = new Date(nowUtc + IST_OFFSET);

  // Calculate days left until the upcoming Sunday (rollover is Sunday 23:59:59 IST)
  // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const istDayOfWeek = istDate.getUTCDay();
  
  // Sunday is 0. If it is Tuesday (2), days left to Sunday is 5 (Wed, Thu, Fri, Sat, Sun).
  // If it is Sunday (0), days left is 0 (it rolls over at midnight tonight).
  const daysLeft = (7 - istDayOfWeek) % 7;

  // Calculate the target deadline date
  const deadlineDate = new Date(istDate.getTime() + daysLeft * 24 * 60 * 60 * 1000);
  
  const day = deadlineDate.getUTCDate();
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const month = monthNames[deadlineDate.getUTCMonth()];
  const year = deadlineDate.getUTCFullYear();

  const getOrdinalSuffix = (dayNum: number) => {
    if (dayNum > 3 && dayNum < 21) return "th";
    switch (dayNum % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  };

  const dateStr = `${day}${getOrdinalSuffix(day)} ${month} ${year}`;

  // 5. Calculate time left in current calendar day (until midnight IST tonight)
  const nextDayIst = Date.UTC(
    istDate.getUTCFullYear(),
    istDate.getUTCMonth(),
    istDate.getUTCDate() + 1, // Tomorrow
    0, 0, 0 // 00:00:00
  );
  const midnightTonightUtc = nextDayIst - IST_OFFSET;
  const remainingTodayMs = Math.max(0, midnightTonightUtc - nowUtc);

  const h = Math.floor(remainingTodayMs / (60 * 60 * 1000));
  const m = Math.floor((remainingTodayMs % (60 * 60 * 1000)) / (60 * 1000));
  const s = Math.floor((remainingTodayMs % (60 * 1000)) / 1000);

  return {
    days: String(daysLeft).padStart(2, "0"),
    hours: String(h).padStart(2, "0"),
    minutes: String(m).padStart(2, "0"),
    seconds: String(s).padStart(2, "0"),
    phase,
    dateStr
  };
}
