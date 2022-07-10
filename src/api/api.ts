export type ShortenUrlPayload = {
  url: string;
}

export type FetchShortUrlsPayload = {
  page?: number;
}

export class Api {
  public static shortenUrl(payload: ShortenUrlPayload) {
    const schema = {
      query: `
        mutation ShortenUrl($url: String!) {
          shorten_url(url: $url) {
            short_url {
              id
              url
              short_url
              clicks
            }
            operation_status {
              status
              message
            }
          }
        }
      `,
      variables: payload,
    };

    return Api.fetch(schema);
  }

  public static fetchShortUrls(payload?: FetchShortUrlsPayload) {
    const schema = {
      query: `
        query GetShortUrls($first: Int!, $page: Int) {
          short_urls(first: $first, page: $page) {
            data {
              id
              url
              short_url
              clicks
            }
            paginatorInfo {
              currentPage
              lastPage
            }
          }
        }
      `,
      variables: {
        first: 10,
        ...payload,
      },
    };

    return Api.fetch(schema);
  }

  private static fetch(schema: Record<string, any>) {
    return fetch("http://test-task.profilancegroup-tech.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(schema),
    });
  }
}
