import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    status: z.enum(["featured", "in-progress", "analytics"]),
    category: z
      .enum(["finance", "supply-chain", "hospitality", "product"])
      .optional(),
    order: z.number().default(0),

    problem: z.string().optional(),
    objective: z.string().optional(),
    requirements: z.array(z.string()).optional(),
    solution: z.string().optional(),
    features: z.array(z.string()).optional(),
    tech: z.array(z.string()).optional(),
    architecture: z.string().optional(),
    screenshots: z
      .array(
        z.object({
          src: z.string(),
          caption: z.string(),
        }),
      )
      .default([]),
    results: z.string().optional(),
    contribution: z.string().optional(),

    github: z.string().url().optional(),
    liveDemo: z.string().url().optional(),
  }),
});

export const collections = { projects };
