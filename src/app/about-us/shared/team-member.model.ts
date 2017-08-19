export interface TeamMember {
  name: string;
  image: string;
  companyLogo?: string;
  role?: string;
  bio: { heading: string | boolean, text: string }[];
}
