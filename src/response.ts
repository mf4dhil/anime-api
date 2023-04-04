import { Response } from 'https://deno.land/x/oak@v12.1.0/response.ts';
import { PrismaClient } from '../generated/client/deno/edge.ts'
import { config } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";

type Metadata = {
  prev?: string;
  next?: string;
  current?: string;
};

interface ApiResponse<T> {
  payload: T;
  message: string;
  metadata?: Metadata
}

export const fresponse = <T>(status_code: number, data: T, message: string, res: Response, metadata?: Metadata) => {
  const apiResponse: ApiResponse<T> = {
    payload: data,
    message,
    metadata: metadata
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
