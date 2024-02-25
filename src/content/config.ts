import { defineCollection, z } from "astro:content";

const showcase = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      image: image(),
      url: z.string().url(),
      featured: z.number().min(1).optional(),
    }),
});

const team = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string().min(1),
      image: image(),
      designation: z.string().min(1),
      bio: z.string().min(1),
      socials: z.array(
        z.object({
          name: z.string().min(1),
          url: z.string().url(),
        }),
      ),
    }),
});

export const collections = {
  showcase,
  team,
};
