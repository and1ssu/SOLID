
import { MailtrapMailProvider } from '../../providers/implementations/MailtrapMailProvider';
import { PostgresUsersRepository } from '../../repositories/implementations/PostgresUsersRepository';
import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';

const mailtrapMailProvider = new MailtrapMailProvider();
const postregresUserRepository = new PostgresUsersRepository();

const cretaUserUseCase = new CreateUserUseCase(
    postregresUserRepository,
    mailtrapMailProvider,
)

const createUserController = new CreateUserController(cretaUserUseCase);

export {  cretaUserUseCase, createUserController };