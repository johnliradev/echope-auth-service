import { FastifyReply, FastifyRequest } from "fastify";
import { AppError } from "./erros";

export const errorHandler = (
  error: any,
  request: FastifyRequest,
  reply: FastifyReply
) => {
  request.log.error(error);

  if (error instanceof AppError) {
    reply.status(error.statusCode).send({
      error: error.message,
      statusCode: error.statusCode,
    });
    return;
  }

  reply.status(500).send({
    error: "Internal Server Error",
    statusCode: 500,
  });
};
