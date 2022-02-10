/* Exemple d'us (A posar en App.js):
<Comment
  author={{
    avatarUrl: 'https://pbs.twimg.com/profile_images/1554940713/cunningham_400x400.jpg',
    name: 'Ward Cunninghan'
  }}
  text="Extreme Programming's roots start with a few people on a few projects taking a fresh look at what they do. It could have been any number of such small groups. The ideas of Extreme Programming have been invented over and over. But one group took advantage of the unique properties of the world wide web to articulate, refine and expand their ideas in an ever enlarging community."
  date="June 2009"
  />
*/
import Avatar from "./Avatar";
import UserInfo from "./UserInfo";

export default function Comment({ author, text, date }) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar author={author}/>
        {/* <div className="UserInfo-name">{author.name}</div> */}
        <UserInfo author={author}/>
      </div>
      <div className="Comment-text">{text}</div>
      <div className="Comment-date">{formatDate(date)}</div>
    </div>
  );
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("ca", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
