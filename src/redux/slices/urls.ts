import { createSlice } from "@reduxjs/toolkit";
import { ILink } from "../../models";
import { fetchShortUrls, shortenUrl } from "../thunks";

type State = {
  data: ILink[];
  pagination: {
    page: number;
    totalPages: number;
  } | null;
  addedUrls: ILink[];
};

const initialState: State = {
  data: [],
  pagination: null,
  addedUrls: [],
};

export const urlsSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchShortUrls.fulfilled, (state, action) => {
      state.data = action.payload.data.short_urls.data.map((link: any) => {
        return {
          ...link,
          source: link.url,
          target: link.short_url,
        };
      });

      state.pagination = {
        page: action.payload.data.short_urls.paginatorInfo.currentPage,
        totalPages: action.payload.data.short_urls.paginatorInfo.lastPage,
      };
    });

    builder.addCase(shortenUrl.fulfilled, (state, action) => {
      const link: any = action.payload.data.shorten_url.short_url;

      state.addedUrls.push({
        id: link.id,
        source: link.url,
        target: link.short_url,
        clicks: link.clicks,
      });
    });
  },
});
