import type { Fetcher } from 'swr';

const useFetcher = <T extends {}>(init?: RequestInit): Fetcher<T> => {
  const fetcher: Fetcher<T> = (url: RequestInfo | URL) =>
    fetch(url, init).then((res) => res.json());
  return fetcher;
};

export { useFetcher };
