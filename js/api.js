const METHOD = {
  GET: 'GET',
  POST: 'POST'
};

const getData = (onSuccess, onError) => {
  fetch('https://31.javascript.htmlacademy.pro/kekstagram/data',
    {method: METHOD.GET,
      credentials: 'same-origin',
    },
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error();
  }).then((data) => onSuccess(data))
    .catch(() => onError());
};

const loadData = (body) => {
  fetch('https://31.javascript.htmlacademy.pro/kekstagram', {
    method: METHOD.POST,
    credentials: 'same-origin',
    body: body,
  });
};

export {getData};

