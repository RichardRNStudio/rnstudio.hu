export type APIOptions<Response, Data> = {
  url: string;
  // eslint-disable-next-line no-unused-vars
  mutator: (data: Response) => Data;
  requestOptions?: RequestInit;
};

export const callAPI = async <Response, Data>({
  url,
  mutator,
  requestOptions,
}: APIOptions<Response, Data>) => {
  try {
    console.log({ url });
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      throw new Error('API call failed - Response not OK');
    }
    const data = await response.json();
    return mutator(data);
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error(error);
    }
    throw new Error('API call failed');
  }
};
