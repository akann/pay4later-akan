export default url =>
  fetch(url, {
    cache: 'no-cache',
    headers: {
      Accept: 'application/json',
    },
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(new Error(`Fetch error: ${res.statusText}, ${res.type}`));
    })
    .catch(err => Promise.reject(new Error(err.message)));
