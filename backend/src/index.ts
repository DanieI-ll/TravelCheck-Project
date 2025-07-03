import 'dotenv/config';

import startServer from './server';
import connectDatabase from './db/connectDatabse';

const bootstrap = async () => {
  await connectDatabase();
  startServer();
};

bootstrap();
