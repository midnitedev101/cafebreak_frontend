import { getClient, logQueries } from '@faustjs/next';

import { generatedSchema, scalarsEnumsHash } from './schema.generated';

export const client = getClient({
  schema: generatedSchema,
  scalarsEnumsHash,
});

export function serverClient(req) {
  return getClient({
    schema: generatedSchema,
    scalarsEnumsHash,
    context: req,
  });
}

if (process.env.NODE_ENV === 'development') {
  logQueries(client);
}

export * from './schema.generated';
