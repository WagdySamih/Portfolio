export interface WorkExperience {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string[];
  date: {
    start: string;
    end: string;
  };
  techs: string[];
}
