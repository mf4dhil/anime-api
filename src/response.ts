import { Response } from 'https://deno.land/x/oak@v12.1.0/response.ts';
import { PrismaClient } from '../generated/client/deno/edge.ts'
import { config } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";

interface ApiResponse<T> {
  payload: T;
  message: string;
  metadata: {
    prev: string;
    next: string;
    current: string;
  };
}

export const fresponse = <T>(status_code: number, data: T, message: string, res: Response) => {
  const apiResponse: ApiResponse<T> = {
    payload: data,
    message,
    metadata: {
      prev: '',
      next: '',
      current: '',
    },
  };
  res.status = status_code;
  res.body = [apiResponse];
};

const { DATABASE_URL } = config();

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: DATABASE_URL,
    },
  },
});
