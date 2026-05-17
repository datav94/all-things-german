export type ConceptSectionTableRow = {
  conjunction: string;
  meaning: string;
  tip: string;
  example: string;
  note?: string;
};

export type ConceptSection = {
  title: string;
  description: string;
  highlight?: string;
  rows: ConceptSectionTableRow[];
};

export type Concept = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  sections: ConceptSection[];
};
