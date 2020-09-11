import { Router, Response } from "express";
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();
const createUserService = new CreateUserService();

usersRouter.post('/', async (request, response: Response) => {
  const { name, email, password } = request.body;
  try {
    const user = await createUserService.execute({ name, email, password });
    return response.json(user);
  } catch (error) {
    return response
      .status(400)
      .json({ error: error.message });
  }
});

export default usersRouter;
