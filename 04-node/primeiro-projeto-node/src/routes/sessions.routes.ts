import { Router, Response } from "express";
import AuthenticateUserService from "../services/AuthenticateUserService";

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response: Response) => {
  try {
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserService();
    const token = await authenticateUser.execute({ email, password });

    return response.json({ token });
  } catch (error) {
    return response
      .status(400)
      .json({ error: error.message });
  }
});

export default sessionsRouter;
