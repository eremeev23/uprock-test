import { setupWorker } from 'msw';
import users from '../services/users';

export const worker = setupWorker(...users);