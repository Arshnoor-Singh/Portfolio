import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/index.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string(),
      summary: z.string(),
      intro: z.string(),
      role: z.string(),
      focus: z.string(),
      tools: z.array(z.string()).default([]),
      cover: image(),
      coverAlt: z.string(),
      gallery: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
            caption: z.string().optional(),
          }),
        )
        .default([]),
      videos: z
        .array(
          z.object({
            title: z.string(),
            youtubeId: z.string(),
            poster: image(),
            posterAlt: z.string(),
          }),
        )
        .default([]),
      links: z
        .array(
          z.object({
            label: z.string(),
            url: z.string(),
          }),
        )
        .default([]),
      systems: z
        .array(
          z.object({
            name: z.string(),
            detail: z.string(),
          }),
        )
        .default([]),
      notes: z.array(z.string()).default([]),
      order: z.number().default(0),
    }),
});

export const collections = { work };
