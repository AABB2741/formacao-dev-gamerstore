import { useCallback } from "react";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export function useApi() {
  const httpGet = useCallback(async function (path: string) {
    const uri = path.startsWith("/") ? path : `/${path}`;
    const requestUrl = `${baseUrl}${uri}`;
    console.log("requesting", requestUrl);

    const response = await fetch(requestUrl);
    return extractData(response);
  }, []);

  const httpPost = useCallback(async function (path: string, body: any) {
    const uri = path.startsWith("/") ? path : `/${path}`;
    const requestUrl = `${baseUrl}${uri}`;

    const response = await fetch(requestUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return extractData(response);
  }, []);

  async function extractData(response: Response) {
    let content = "";
    try {
      content = await response.text();
      return JSON.parse(content);
    } catch (e) {
      console.error(e);
      return content;
    }
  }

  return { httpGet, httpPost };
}
