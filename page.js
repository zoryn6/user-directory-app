import UserGrid from "../components/UserGrid";

async function getUsers() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    {
      next: { revalidate: 3600 }
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
}

export default async function Home() {
  const users = await getUsers();

  return (
    <main className="container">
      <header className="header">
        <h1>User Directory</h1>
        <p>Explore our community members</p>
      </header>

      <section>
        <h2 className="section-title">
          All Users
          <span className="count">{users.length}</span>
        </h2>

        <UserGrid users={users} />
      </section>
    </main>
  );
}
