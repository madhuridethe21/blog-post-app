
import { z } from "zod";

export async function get<T>(
  url: string,
  zodSchema: z.ZodType<T>
): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch data.");
  }

  const data: unknown = await response.json();

  try {
    return zodSchema.parse(data);
  } catch {
    throw new Error("Invalid data received from server.");
  }
}