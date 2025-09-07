import { ITrackingEvent } from "@/src/types/parcel.types";
import { baseApi } from "../baseApi";
import { IResponse } from "@/src/types";
/* eslint-disable @typescript-eslint/no-explicit-any */

export const trackApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    trackParcel: builder.query<ITrackingEvent[], string>({
      query: (trackingId) => ({
        url: `/user/track-parcel/${trackingId}`,
        method: "GET",
      }),
      transformResponse: (response: IResponse<ITrackingEvent[]>) => response.data || [],
    }),
  }),
});

export const { useTrackParcelQuery } = trackApi;
