import { Router, Response } from "express";
import CreateUserService from '../services/CreateUserService';
import ensureAuthenticated from "../middlewares/ensureAuthenticated";
import multer from 'multer';
import uploadConfig from '../config/upload';
import UpdateUserAvatarService from "../services/UpdateUserAvatarService";

const usersRouter = Router();
const createUserService = new CreateUserService();
const upload = multer(uploadConfig);

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

usersRouter.patch('/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (request, response: Response) => {
    const updateUserAvatar = new UpdateUserAvatarService();
    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatar_filename: request.file.filename
    })
    return response.status(200).json(user);
  });

export default usersRouter;
