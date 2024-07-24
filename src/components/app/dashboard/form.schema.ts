import * as z from 'zod';

export const formSchema = z.object({
   name: z
      .string()
      .min(5, { message: 'O nome precisa de do minímo 5 caracteres' })
      .max(50, { message: 'O nome não pode ultrapassar 50 caracteres.' }),
   description: z
      .string()
      .min(3, { message: 'A descrição precisa de do minímo 10 caracteres' })
      .max(250, { message: 'A descrição não pode ultrapassar 250 caracteres.' })
});

export type PageFormData = z.infer<typeof formSchema>;
