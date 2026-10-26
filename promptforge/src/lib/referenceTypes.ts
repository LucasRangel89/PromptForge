export type ReferenceKind =
  | 'anchor'
  | 'scenario'
  | 'style'
  | 'trend'
  | 'detail'
  | 'medium'
  | 'palette'
  | 'mood'
  | 'composition';

export type ReferenceItem = {
  id: string;
  kind: ReferenceKind;
  name: string;
  description: string;
  output: string;
  category: string;
  era: string;
  source: string;
  colors?: string[];
};
