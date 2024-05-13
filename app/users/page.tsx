import React from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Props {
  searchParams: { sortOrder: string };
}
const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  console.log(sortOrder);
  return (
    <>
    <Link className="btn uppercase" href="/users/new">New USER</Link>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
