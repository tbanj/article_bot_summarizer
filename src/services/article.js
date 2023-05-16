import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;
/* const options = {
  method: "GET",
  url: "summarize",
  params: {
    url: "https://time.com/6266679/musk-ai-open-letter/",
    length: "3",
  },
  headers: {
    "X-RapidAPI-Key": "4a15c28fb5msh994a1facfd216b2p14b06cjsn583bd5a89bae",
    "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
  },
}; */

/* try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
} */

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", rapidApiKey);
      headers.set(
        "X-RapidAPI-Host",
        "article-extractor-and-summarizer.p.rapidapi.com"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) =>
        `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
    }),
  }),
});

// export const { useGetSummaryQuery} = articleApi;
export const { useLazyGetSummaryQuery } = articleApi;
