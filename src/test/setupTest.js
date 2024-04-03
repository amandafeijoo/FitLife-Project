
import { setupServer } from 'msw/node';
import { handlers } from './mocks/handlers';
const server = setupServer(...handlers);
beforeAll(() => server.listen());
afterAll(() => server.resetHandlers(), server.close());