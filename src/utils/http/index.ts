export function useHttpGet(url: string, params?: { [s: string]: any }): Promise<any> {
  const searchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(params || {})) {
    searchParams.append(key, value?.toString() || '');
  }

  const urlAndParams = `${url}?${searchParams.toString()}`;
  return fetch(urlAndParams).then(res => res.json());
}

export function useHttpJson(url: string, data?: object | Array<any>): Promise<any> {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

export function useHttpForm(url: string, data?: { [s: string]: any }): Promise<any> {
  const searchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(data || {})) {
    searchParams.append(key, value?.toString() || '');
  }

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/form-urlencoded'
    },
    body: searchParams
  }).then(res => res.json());
}
