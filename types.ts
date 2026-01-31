
export interface ImpactItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  color: string;
}

export interface CauseItem {
  title: string;
  description: string;
  icon: string;
  percentage?: number;
}

export interface SolutionItem {
  title: string;
  description: string;
  action: string;
}
