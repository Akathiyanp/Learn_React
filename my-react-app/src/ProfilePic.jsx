export default function ProfilePic() {
  const image = "./src/assets/profile.jpeg";
  const handleClick = (e) => {
    e.target.style.display = "none";
  };
  return (
    <img
      onClick={(e) => handleClick(e)}
      className="profilePic"
      src={image}
      alt="myprofilepic"
    />
  );
}
