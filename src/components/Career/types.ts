export interface Technology {
  name: string;
  experience_level: number;
  category: 'programming-languages' | 'frameworks' | 'containerization-and-orchestration'
          | 'operating-systems' | 'monitoring' | 'automation' | 'networking'
}

export interface YearData {
  year: string;
  technologies: Technology[];
}

export interface CareerData {
  years: YearData[];
}
