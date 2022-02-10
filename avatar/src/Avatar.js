export default function Avatar({ author }) {
  return <img className="Avatar" src={author.avatarUrl} alt={author.name} />;
}
