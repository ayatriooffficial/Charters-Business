import type { Programme, ProgramKey, DropdownData, ProgrammeCardData, HeroData } from "./types";
import { cba } from "./cba";
import { dgm } from "./dgm";
import { tbm } from "./tbm";

// Re-export all types so consumers can import from "@/data/programmes" as before
export type * from "./types";

// Re-export SEO metadata so it flows through the barrel chain
export * from "./seo";


// PROGRAMMES DATA — order: CBA → DGM → TBM (must match generateStaticParams order)
export const programmes: Programme[] = [cba, dgm, tbm];

// HELPER FUNCTIONS

export function getAllProgrammeSlugs(): ProgramKey[] {
  return programmes.map((p) => p.slug);
}

export function getProgrammeBySlug(slug: string): Programme | undefined {
  return programmes.find((p) => p.slug === slug);
}

export function getAllProgrammes(): Programme[] {
  return programmes;
}

export function getDropdownData(slug: ProgramKey): DropdownData | undefined {
  const programme = getProgrammeBySlug(slug);
  return programme?.dropdown;
}

export function getAllDropdownData(): Record<ProgramKey, DropdownData> {
  return programmes.reduce(
    (acc, programme) => {
      acc[programme.slug] = programme.dropdown;
      return acc;
    },
    {} as Record<ProgramKey, DropdownData>,
  );
}

export function getCardData(slug: ProgramKey): ProgrammeCardData | undefined {
  const programme = getProgrammeBySlug(slug);
  return programme?.card;
}

export function getAllCardData(): ProgrammeCardData[] {
  return programmes.map((p) => p.card);
}

export function getHeroData(slug: ProgramKey): HeroData | undefined {
  const programme = getProgrammeBySlug(slug);
  return programme?.hero;
}
