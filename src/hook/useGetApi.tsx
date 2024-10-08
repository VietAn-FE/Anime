import ServerFilm from "@/api/ServerFilm";
import { useEffect, useState } from "react";

interface WebpImage {
  large_image_url: string;
}

interface Images {
  webp: WebpImage;
}

interface Anime {
  images: Images;
  title: string; // Thêm các thuộc tính khác nếu cần
}

interface ApiResponse {
  data: Anime[];
  pagination: {
    // Định nghĩa kiểu cho pagination nếu cần
  };
}

const useGetApi = (url: string): ApiResponse | null => {
  const [data, setData] = useState<ApiResponse | null>(null);
  useEffect(() => {
    (async () => {
      try {
        const data: ApiResponse = await ServerFilm.getFilm(url);
        if (!data || !data.data.length) {
          return;
        }
        setData(data);
      } catch (error) {}
    })();
  }, [url]);
  return data;
};

export default useGetApi;
