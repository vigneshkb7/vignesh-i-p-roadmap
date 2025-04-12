import React from "react";

const comments = [
  {
    name: "vignesh",
    comment: "I don't like this page",
    replies: [
      {
        name: "ram",
        comment: "abracadabra",
      },
      {
        name: "akhil",
        comment: "abracadabra",
      },
    ],
  },
  {
    name: "akhil",
    comment: "abracadabra no replies",
    replies: [],
  },
  {
    name: "vignesh",
    comment: "I don't like this page",
    replies: [
      {
        name: "ram",
        comment: "abracadabra",
        replies: [
          {
            name: "akhil",
            comment: "abracadabra",
          },
        ],
      },
      {
        name: "akhil",
        comment: "abracadabra",
      },
    ],
  },
];

const Comment = ({ name, comment, replies = [] }) => {
  return (
    <div style={{ borderLeft: "1px solid red", padding: "10px" }}>
      <h2>{name}</h2>
      <p>{comment}</p>
      {replies.length > 0 &&
        replies.map((c, idx) => (
          <Comment
            key={idx}
            name={c.name}
            comment={c.comment}
            replies={c.replies}
          />
        ))}
    </div>
  );
};

const CommentSection = () => {
  return (
    <div>
      {comments.map((c, idx) => (
        <Comment
          key={idx}
          name={c.name}
          comment={c.comment}
          replies={c.replies}
        />
      ))}
    </div>
  );
};

export default CommentSection;
