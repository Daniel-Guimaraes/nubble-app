import {z} from 'zod';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim;

export const signUpSchema = z.object({
  username: z
    .string()
    .regex(userNameRegex, 'Digite um username válido')
    .toLowerCase(),
  fullName: z
    .string()
    .min(5, 'O nome precisa ter no mínimo 5 caracteres')
    .max(50, 'O nome excedeu o máximo de caracteres')
    .transform(value => {
      return value
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    }),
  email: z.string().email('Digite um email válido'),
  password: z.string().min(8, 'Senha deve ter no mínimo 8 caracteres'),
});

export type SignUpSchemaType = z.infer<typeof signUpSchema>;
