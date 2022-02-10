import Avatar from "./Avatar";

export default function UserInfo({ user }) {
  return (
    <div className="UserInfo">
      <Avatar author={user} />
      <div className="UserInfo-name">{user.name}</div>
    </div>
  );
}
