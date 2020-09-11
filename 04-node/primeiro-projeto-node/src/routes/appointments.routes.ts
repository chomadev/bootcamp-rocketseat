import { Router, Response } from "express";
import { parseISO } from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';
import { getCustomRepository } from "typeorm";

const appointmentsRouter = Router();
const createAppointmentService = new CreateAppointmentService();

appointmentsRouter.get('/', async (request, response: Response) => {
  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  return response.json(await appointmentsRepository.find());
});

appointmentsRouter.post('/', async (request, response: Response) => {
  const { provider_id, date } = request.body;
  const parsedDate = parseISO(date);
  try {
    const appointment = await createAppointmentService.execute({ provider_id, date: parsedDate });
    return response.json(appointment);
  } catch (error) {
    return response
      .status(400)
      .json({ error: error.message });
  }
});

export default appointmentsRouter;
