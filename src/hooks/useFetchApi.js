import { createResource, createSignal, createEffect } from 'solid-js';

import { fetchApi } from '../services/api';

export const useFetchApi = (resource = '') => {
  const [response] = createResource(resource, fetchApi);
  const [data, setData] = createSignal({});

  createEffect(async () => {
    if (response()) {
      setData(await response().json());
    }
  }, [response]);

  return {
    response,
    data
  };
};
