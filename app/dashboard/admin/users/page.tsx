// app/admin/users/page.tsx
"use client";

import { useState } from "react";
import {
  useGetAllUsersQuery,
  useBlockUserMutation,
  useUnblockUserMutation,
  useDeleteUserMutation,
} from "@/src/redux/apis/admin.api";
import { IUser, UserStatus } from "@/src/types/user.types";
import { toast } from "sonner";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function AdminUsersPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 5; // users per page

  const { data, isLoading, isError, refetch } = useGetAllUsersQuery({ page: currentPage, limit });

  const [blockUser] = useBlockUserMutation();
  const [unblockUser] = useUnblockUserMutation();
  const [deleteUser] = useDeleteUserMutation();

  if (isLoading) return <p className="text-center py-10">Loading users...</p>;
  if (isError) return <p className="text-center py-10">Failed to fetch users.</p>;
  if (!data?.data?.length) return <p className="text-center py-10">No users found.</p>;

  const total = data.meta.total;
  const totalPage = Math.max(1, Math.ceil(total / limit));
  const start = total ? (currentPage - 1) * limit + 1 : 0;
  const end = total ? Math.min(currentPage * limit, total) : 0;

  const handleAction = async (action: "block" | "unblock" | "delete", id: string) => {
    try {
      if (action === "block") await blockUser(id).unwrap();
      if (action === "unblock") await unblockUser(id).unwrap();
      if (action === "delete") await deleteUser(id).unwrap();
      toast.success(`User ${action}ed successfully`);
      refetch();
    } catch (err: any) {
      toast.error(err?.data?.message || `Failed to ${action} user`);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-900">All Users ({total})</h1>

      {/* Large screen table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left text-gray-700">Name</th>
              <th className="border px-4 py-2 text-left text-gray-700">Email</th>
              <th className="border px-4 py-2 text-left text-gray-700">Phone</th>
              <th className="border px-4 py-2 text-left text-gray-700">Role</th>
              <th className="border px-4 py-2 text-left text-gray-700">Status</th>
              <th className="border px-4 py-2 text-left text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.data.map((user: IUser) => (
              <tr
                key={user._id}
                className="hover:bg-gray-100 transition-colors"
              >
                <td className="border px-4 py-2 text-gray-900">{user.name}</td>
                <td className="border px-4 py-2 text-gray-900">{user.email}</td>
                <td className="border px-4 py-2 text-gray-900">{user.phone || "-"}</td>
                <td className="border px-4 py-2 text-gray-900">{user.role}</td>
                <td className="border px-4 py-2 text-gray-900">{user.Status}</td>
                <td className="border px-4 py-2 flex flex-wrap gap-2">
                  {user.Status === UserStatus.ACTIVE ? (
                    <button
                      onClick={() => handleAction("block", user._id!)}
                      className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                    >
                      Block
                    </button>
                  ) : (
                    <button
                      onClick={() => handleAction("unblock", user._id!)}
                      className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
                    >
                      Unblock
                    </button>
                  )}
                  <button
                    onClick={() => handleAction("delete", user._id!)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Small screen cards */}
      <div className="md:hidden flex flex-col gap-4">
        {data.data.map((user: IUser) => (
          <div key={user._id} className="border border-gray-200 p-4 rounded shadow-sm bg-white">
            <div className="flex justify-between mb-1"><span className="font-semibold">Name:</span><span>{user.name}</span></div>
            <div className="flex justify-between mb-1"><span className="font-semibold">Email:</span><span>{user.email}</span></div>
            <div className="flex justify-between mb-1"><span className="font-semibold">Phone:</span><span>{user.phone || "-"}</span></div>
            <div className="flex justify-between mb-1"><span className="font-semibold">Role:</span><span>{user.role}</span></div>
            <div className="flex justify-between mb-2"><span className="font-semibold">Status:</span><span>{user.Status}</span></div>
            <div className="flex flex-wrap gap-2 mt-2">
              {user.Status === UserStatus.ACTIVE ? (
                <button onClick={() => handleAction("block", user._id!)} className="flex-1 px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">
                  Block
                </button>
              ) : (
                <button onClick={() => handleAction("unblock", user._id!)} className="flex-1 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition">
                  Unblock
                </button>
              )}
              <button onClick={() => handleAction("delete", user._id!)} className="flex-1 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPage > 1 && (
        <div className="w-full bottom-0 left-0 p-4 flex flex-col items-center mt-6">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>

              {Array.from({ length: totalPage }, (_, i) => i + 1).map(page => (
                <PaginationItem key={page} onClick={() => setCurrentPage(page)}>
                  <PaginationLink isActive={currentPage === page}>{page}</PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPage))}
                  className={currentPage === totalPage ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
          <p className="text-sm mt-2 text-gray-700">
            Showing {start}-{end} of {total}
          </p>
        </div>
      )}



      
    </div>
  );
}

