import axios from "axios";

const accessKey = "ITJxZ4BbLHJ0IN85JA5bH-YxOvEwvITDPaPcn7iffL8";

axios.defaults.baseURL = "https://api.unsplash.com/search";

export const featchPhotos = async (title, currentPage) => {
  const response = await axios.get("/photos", {
    params: {
      client_id: accessKey,
      orientation: "landscape",
      query: title,
      per_page: 12,
      page: currentPage,
    },
  });
  return response.data;
};
