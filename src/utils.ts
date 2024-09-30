export const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  return (await response.json()) as Post[];
};

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// export const fetchPostDetail = async (postId: number) => {
//   const postResponse = fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
//   const commentResponse = fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
//
// }