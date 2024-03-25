import { z } from 'zod'

export const FormDataSchema = z.object({
      email: z.string().min(1, 'Email is required').email('Invalid email address'),
      vehicleOwner: z.string().min(1, 'Buyer is required'),
      firstName: z.string().min(1, 'First name is required'),
      lastName: z.string().min(1, 'Last name is required'),
      country: z.string().min(1, 'Country is required'),
      password: z.string().min(1, 'Password is required'),
      confirmPassword: z.string().min(1, 'Confirm password is required'),
      phoneNumber: z.string().min(1, 'Phone number is required'),
      vin: z.string().min(1, 'VIN  is required'),
})