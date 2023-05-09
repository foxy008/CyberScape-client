import { fetchNews } from "../helpers/newsMethod";

export function getNews() {
  return async function (dispatch) {
    fetchNews()
    .then((payload) => {
        return dispatch({
            type: "news/fetch",
            payload: payload.data,
        });
    })
    .catch((error) => console.log(error));
  };
}
