import { useCallback } from "react";

const urlBase = process.env.API_URL;

export function useApi() {
  const httpGet = useCallback(async function (caminho: string) {
    const uri = caminho.startsWith("/") ? caminho : `/${caminho}`;
    const requestUrl = `${urlBase}${uri}`;
    const response = await fetch(requestUrl);
    return extractData(response);
  }, []);

  const httpPost = useCallback(async function (caminho: string, body: any) {
    const uri = caminho.startsWith("/") ? caminho : `/${caminho}`;
    const requestUrl = `${urlBase}${uri}`;

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
      return content;
    }
  }

  return { httpGet, httpPost };
}
