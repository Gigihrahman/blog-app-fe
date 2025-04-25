import { User } from "@/types/user";

export interface Blog {
  id: number;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  content: string;
  category: string;
  userId: number;
  deletedAt: Date | null;
  createAt: Date;
  updatedAt: Date;
  user?: User;
}
