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
  
  function countCommentsAndReplies(comment: IComment): number {
    let count = 1; 
  
    if (comment.replies) {
      for (const reply of comment.replies) {
        count += countCommentsAndReplies(reply);
      }
    }
  
    return count;
  }
  
  const totalComments = comments.reduce(
    (acc, comment) => acc + countCommentsAndReplies(comment),
    0
  );
  
  console.log('Total comments and replies:', totalComments);
  
