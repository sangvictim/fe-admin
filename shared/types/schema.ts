import { z } from "zod";

export type SchemaDto<T, K = undefined> = Partial<
  Record<(K extends string ? keyof T | K : keyof T) | (string & {}), z.ZodType>
>;