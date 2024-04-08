import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
const server = setupServer(
  rest.get('/api/data', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ data: 'Mocked response' })
    );
  }),
);
beforeAll(() => server.listen());
afterAll(() => server.close());
test('displays data from API', async () => {
  render(<YourComponent />);
  const dataElement = await screen.findByText('Mocked response');
  expect(dataElement).toBeInTheDocument();
});