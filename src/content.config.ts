import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      tags: z.array(z.string()),
      image: image(),
      repo: z.string().url(),
      demo: z.string().url().optional(),
      date: z.coerce.date(),
      order: z.number().optional(),
    }),
});

export const collections = { projects };
