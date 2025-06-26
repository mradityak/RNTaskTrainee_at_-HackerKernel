

export async function ApiFetcher({ method = "GET", url, params = {}, body = null, headers = {} }) {
  try {
    let fullUrl = url;
    if (method === "GET" && Object.keys(params).length > 0) {
      const query = new URLSearchParams(params).toString();
      fullUrl += `?${query}`;
    }

    const response = await fetch(fullUrl, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: method !== "GET" ? JSON.stringify(body) : null,
    });

    const contentType = response.headers.get("content-type");
    const isJson = contentType && contentType.includes("application/json");
    const data = isJson ? await response.json() : await response.text();

    console.log('api===',response)

    if (!response.ok) {
      throw new Error(data?.message || "Something went wrong");
    }

    return data;
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
}
