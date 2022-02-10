export default function Avatar ( {author} ) {
    return (
        <img
        style={{ width: "300px" }}
        className="Avatar"
        src={author.avatarUrl}
        alt={author.name}
      />
    )
}


   
