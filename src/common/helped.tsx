export const fetchingData = async (url: string, requestOption: object) => {
  const res = await fetch(url, requestOption);
  const data = await res.json();
  return data;
};
