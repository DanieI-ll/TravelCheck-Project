import 'dotenv/config';

import startServer from './server';
import connectDatabase from './db/connectDatabse';
// import City from './db/City';

const bootstrap = async () => {
  await connectDatabase();
  startServer();
};

bootstrap();
