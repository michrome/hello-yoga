const Review = ({ review: { body, name, url } }) => {
  return (
    <blockquote>
      “{body}”
      <cite>
        {" "}
        <a href={url}>{name}</a>
      </cite>
    </blockquote>
  );
};

export default Review;
