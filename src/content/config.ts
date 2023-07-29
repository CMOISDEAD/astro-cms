import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(1).max(80),
    description: z.string().min(1).max(120),
    date: z.date().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
    feat: z.boolean().optional(),
  }),
});

export const collections = { blog };
