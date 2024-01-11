type IComment = {
    commentId: number;
    commentContent: string;
    replies?: IComment[];
  };
  
  const comments: IComment[] = [
    {
      commentId: 1,
      commentContent: 'Hai',
      replies: [
        {
          commentId: 11,
          commentContent: 'Hai juga',
          replies: [
            {
              commentId: 111,
              commentContent: 'Haai juga hai jugaa',
            },
            {
              commentId: 112,
              commentContent: 'Haai juga hai jugaa',
            },
          ],
        },
        {
          commentId: 12,
          commentContent: 'Hai juga',
          replies: [
            {
              commentId: 121,
              commentContent: 'Haai juga hai jugaa',
            },
          ],
        },
      ],
    },
    {
      commentId: 2,
      commentContent: 'Halooo',
    },
  ];
  
interface IComment {
  replies?: IComment[];
}

function countCommentsAndReplies(comment: IComment): number {
  return (comment.replies || []).reduce(
    (count, reply) => count + countCommentsAndReplies(reply),
    1
  );
}

const totalComments = comments.reduce(
  (acc, comment) => acc + countCommentsAndReplies(comment),
  0
);

console.log('Total comments and replies:', totalComments);


// [LOG]: "Total comments and replies:",  7 
