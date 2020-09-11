import Appointment from '../models/Appointment';
import { EntityRepository, Repository } from 'typeorm'

@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {

  public async findAppointmentInSameDate(provider: string, date: Date): Promise<Appointment | null> {

    const appointmentFound = await this.findOne({
      where: { provider, date }
    })

    return appointmentFound || null;
  }
}

export default AppointmentsRepository;
