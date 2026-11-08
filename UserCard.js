export default function UserCard({ user }) {
  const initials = user.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);

  return (
    <article className="user-card">
      <div className="avatar">
        {initials}
      </div>

      <h3>{user.name}</h3>
      <p className="username">@{user.username}</p>

      <div className="details">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>
        <p><strong>City:</strong> {user.address.city}</p>
        <p><strong>Company:</strong> {user.company.name}</p>
      </div>
    </article>
  );
}
