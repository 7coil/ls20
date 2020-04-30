import URLSearchParams from '@ungap/url-search-params';

const createSearchParams = (object) => {
  const searchParams = new URLSearchParams();

  Object.entries(object)
    .forEach(([key, value]) => {
      searchParams.set(key, value);
    })

  return searchParams;
}

export {
  createSearchParams
}
