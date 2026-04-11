import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blogs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional().default([]),
    coverImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const updates = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/updates' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    lang: z.string().optional(),
    slug: z.string().optional(),
    author: z.string().optional(),
  }),
});

export const collections = { blogs, updates };
