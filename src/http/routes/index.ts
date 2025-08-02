import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export const Router = (app: FastifyInstance) => {
  app.get("/health", (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({ status: "ok" });
  });
};
