// Converts **text** markers in data strings into <strong> for safe inline bolding.
// Editors writing copy in cba.ts / dgm.ts / tbm.ts can wrap any keyword with
// **...** (e.g. "Learn **SAP S/4HANA** in week one") and it renders bold on the
// website without any code change. Only **double asterisks** are converted; all
// other characters are passed through untouched.
export function boldText(input?: string | null): string {
  if (!input) return "";
  return String(input).replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
}
