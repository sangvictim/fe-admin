import { z } from "zod";
import { SchemaDto, commentType } from "../types";

export const commentSchema = z.object({
  postId: z.number({ coerce: true }).min(1, { message: 'Post id cannot be empty' }),
  name: z.string().min(1, { message: 'Name cannot be empty' }),
  email: z.string().min(1, { message: 'Email cannot be empty' }).email({ message: 'Invalid email' }),
  body: z.string().min(1, { message: 'Body cannot be empty' })
} satisfies SchemaDto<commentType>);