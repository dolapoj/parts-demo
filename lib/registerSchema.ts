import { z } from 'zod'

export const FormDataSchema = z.object({
      email: z.string().min(1, 'Email is required').email('Invalid email address'),
      role: z.string().min(1, 'Buyer is required'),
      first_name: z.string().min(1, 'First name is required'),
      last_name: z.string().min(1, 'Last name is required'),
      country: z.string().min(1, 'Country is required'),
      password: z.string()
      .min(8, 'Password must be at least 8 characters')
      .min(1, 'Password is required')
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
            message: 'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character',
      }),
      confirm_password: z.string()
      .min(8, 'Password must be at least 8 characters')
      .min(1, 'Password is required')
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
            message: 'Password does not match',
      }),
      phone_number: z.string().min(1, 'Phone number is required'),
      company_name: z.string().min(1, 'Company name  is required').optional()
}).strip();