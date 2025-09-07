import { IUser } from "@/src/types/user.types";
import { baseApi } from "../baseApi";
import { IParcel } from "@/src/types/parcel.types";
import { IResponse } from "@/src/types";
/* eslint-disable @typescript-eslint/no-explicit-any */

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // --- GET USERS ---
   getAllUsers: builder.query<
  { data: IUser[]; meta: { total: number } },
  { page?: number; limit?: number } | void
>({
  query: (filters) => {
    const params = new URLSearchParams();
    if (filters?.page) params.append("page", filters.page.toString());
    if (filters?.limit) params.append("limit", filters.limit.toString());

    return {
      url: `/admin/users?${params.toString()}`,
      method: "GET",
    };
  },
  providesTags: ["USER"],
  transformResponse: (response: { data: IUser[]; meta: { total: number } }) =>
    response,
}),


    // --- GET PARCELS ---
   getAllParcels: builder.query<
  { data: IParcel[]; meta: any },
  { searchTerm?: string; status?: string; type?: string; sort?: string; page?: number; limit?: number } | void
>({
  query: (filters) => {
    const params = new URLSearchParams();
    if (filters?.searchTerm) params.append("searchTerm", filters.searchTerm);
    if (filters?.status) params.append("status", filters.status);
    if (filters?.type) params.append("type", filters.type);
    if (filters?.sort) params.append("sort", filters.sort);
    if (filters?.page) params.append("page", filters.page.toString());
    if (filters?.limit) params.append("limit", filters.limit.toString());

    return {
      url: `/admin/parcels?${params.toString()}`,
      method: "GET",
    };
  },
  providesTags: ["PARCEL"],
  transformResponse: (response: { data: IParcel[]; meta: any }) => response,
}),



    // --- UPDATE USER ---
updateUser: builder.mutation<IUser, { id: string; body: Partial<IUser> }>({
  query: ({ id, body }) => ({
    url: `/admin/update-user/${id}`,
    method: "PATCH",
    body: { ...body }, // <- send a plain object
    headers: {
      "Content-Type": "application/json", // ensure JSON
    },
  }),
  invalidatesTags: ["USER"],
  transformResponse: (res: IResponse<IUser> | any): IUser => res?.data ?? res,
}),




    // --- BLOCK USER ---
    blockUser: builder.mutation<IUser, string>({
      query: (id) => ({
        url: `/admin/block-user/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["USER"],
    }),

    // --- UNBLOCK USER ---
    unblockUser: builder.mutation<IUser, string>({
      query: (id) => ({
        url: `/admin/unblock-user/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["USER"],
    }),

    // --- DELETE USER ---
    deleteUser: builder.mutation<void, string>({
      query: (id) => ({
        url: `/admin/delete-user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["USER"],
    }),

    // --- UPDATE PARCEL ---
    updateParcel: builder.mutation<IParcel, { id: string; body: Partial<IParcel> }>({
      query: ({ id, body }) => ({
        url: `/admin/parcel/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["PARCEL"],
    }),

    // --- APPROVE PARCEL ---
    approveParcel: builder.mutation<IParcel, string>({
      query: (id) => ({
        url: `/admin/approve-parcel/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["PARCEL"],
    }),
    // --- Deliver PARCEL ---
    deliverParcel: builder.mutation<IParcel, string>({
      query: (id) => ({
        url: `/admin/Deliver-parcel/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["PARCEL"],
    }),

    // --- CANCEL PARCEL ---
    cancelParcel: builder.mutation<IParcel, string>({
      query: (id) => ({
        url: `/admin/cancel-parcel/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["PARCEL"],
    }),

    // --- DELETE PARCEL ---
    deleteParcel: builder.mutation<void, string>({
      query: (id) => ({
        url: `/admin/delete-parcel/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["PARCEL"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetAllParcelsQuery,
  useUpdateUserMutation,
  useBlockUserMutation,
  useUnblockUserMutation,
  useDeleteUserMutation,
  useUpdateParcelMutation,
  useApproveParcelMutation,
  useDeliverParcelMutation,
  useCancelParcelMutation,
  useDeleteParcelMutation,
} = adminApi;
