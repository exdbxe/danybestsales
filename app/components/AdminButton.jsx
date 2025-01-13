"use client";

import Link from "next/link";
import { useAuth } from "@/../contexts/AuthContext";
import { useAdmin } from "@/../lib/firestore/admins/read";

export default function AdminButton() {
  const { user } = useAuth();
  const { data } = useAdmin({ email: user?.email });
  if (!data) {
    return <></>;
  }
  return (
    <Link href={"/admin"}>
      <button isLoading={true} className="text-xs font-semibold">
        Admin
      </button>
    </Link>
  );
}
