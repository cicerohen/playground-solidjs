import md5 from 'md5';
import { stringifyUrl } from 'query-string';

const { MARVEL_API_BASE, MARVEL_PUBLIC_KEY, MARVEL_PRIVATE_KEY } = process.env;

export const fetchApi = async (resource = '') => {
  const ts = new Date().getTime();
  const hash = md5(`${ts}${MARVEL_PRIVATE_KEY}${MARVEL_PUBLIC_KEY}`);
  const url = `${MARVEL_API_BASE}/${resource}`;
  const uri = stringifyUrl({
    url: url,
    query: {
      ts: ts,
      apikey: MARVEL_PUBLIC_KEY,
      hash: hash
    }
  });
  return fetch(uri);
};
