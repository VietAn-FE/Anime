import { fetchingData } from "@/common/helped";

export default {
  getFilm: (url: string) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    return fetchingData(url, requestOptions);
  },
};
