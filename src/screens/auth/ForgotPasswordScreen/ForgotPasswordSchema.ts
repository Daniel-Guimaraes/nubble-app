import {z} from 'zod';

export const forgotPasswordSchema = z.object({
  email: z.string().email('Digite um email válido'),
});

export type ForgotPasswordSchemaType = z.infer<typeof forgotPasswordSchema>;
