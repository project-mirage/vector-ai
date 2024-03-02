export interface CompatibilityItem {
  icon: string;
  title: string;
  url: string;
}

export interface FeatureItem {
  description: string;
  icon: string;
  title: string;
}

export interface FooterLink {
  description: string;
  icon: string;
  url: string;
}

export interface NavItem {
  title: string;
  url: string;
}

interface TeamDataImage {
  src: string;
  width: number;
  height: number;
  format: "svg" | "png" | "jpg" | "jpeg" | "tiff" | "webp" | "gif" | "avif";
}

interface TeamDataSocial {
  name: string;
  url: string;
}

export type TeamData = Member[];

export interface Member {
  name: string;
  designation: string;
  image: TeamDataImage;
  bio: string;
  socials: TeamDataSocial[];
}
