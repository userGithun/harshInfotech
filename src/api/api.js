const BASE_URL = import.meta.env.VITE_BACKEND_URL;
console.log("BASE_URL =", BASE_URL);

const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;
export const getImageUrl = (path) => {
  if (!path) return "/placeholder.svg";
  return `${IMAGE_URL}/${path}`;
};
const API_EXPIRE_TIME = 5000;
const FACEBOOK_APP_ID = import.meta.env.VITE_FACEBOOK_APP_ID;
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

export { BASE_URL, API_EXPIRE_TIME, FACEBOOK_APP_ID, GOOGLE_CLIENT_ID };
