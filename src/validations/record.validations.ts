import { z } from 'zod';

export const createRecordSchema = z.object({
  amount: z.number(),
  type: z.enum(['income', 'expense']),
  category: z.string(),
  date: z.string(), 
  note: z.string().optional()
});


export const updateRecordSchema = z.object({
  amount: z.number().optional(),
  type: z.enum(['income', 'expense']).optional(),
  category: z.string().optional(),
  date: z.string().optional(),
  note: z.string().optional()
});