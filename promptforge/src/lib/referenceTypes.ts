export type ReferenceKind =
  | 'anchor'
  | 'scenario'
  | 'action'
  | 'weather'
  | 'style'
  | 'trend'
  | 'detail'
  | 'medium'
  | 'palette'
  | 'lighting'
  | 'texture'
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
