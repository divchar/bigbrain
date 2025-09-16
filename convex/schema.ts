import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';
import { query } from './_generated/server';

export const getDocuments = query({
  async handler(ctx) {
    return await ctx.db.query('documents').collect();
  },
});

export default defineSchema({
  documents: defineTable({ title: v.string() }),
});
