import { createSearchParamsCache, parseAsInteger, parseAsString } from "nuqs/parsers";

export const searchParamsCache = createSearchParamsCache({
  q: parseAsString.withDefault(""),
  maxResults: parseAsInteger.withDefault(10),
});
