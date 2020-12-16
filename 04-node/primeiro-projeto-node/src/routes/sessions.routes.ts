import { Router, Response } from "express";
import AuthenticateUserService from "../services/AuthenticateUserService";

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response: Response) => {
  const { email, password } = request.body;

  const authenticateUser = new AuthenticateUserService();
  const userAndToken = await authenticateUser.execute({ email, password });

  return response.json(userAndToken);
});

export default sessionsRouter;
