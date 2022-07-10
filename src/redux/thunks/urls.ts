import { createAsyncThunk } from "@reduxjs/toolkit";
import { Api, FetchShortUrlsPayload, ShortenUrlPayload } from "../../api";

export const fetchShortUrls = createAsyncThunk(
  'urls/fetch',
  async (payload: FetchShortUrlsPayload) => {
    const response = await Api.fetchShortUrls(payload);

    return response.json();
  }
);

export const shortenUrl = createAsyncThunk(
  'urls/shorten_url',
  async (payload: ShortenUrlPayload) => {
    const response = await Api.shortenUrl(payload);

    return response.json();
  }
);
