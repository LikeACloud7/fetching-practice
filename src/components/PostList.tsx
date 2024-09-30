import type { Post } from '../utils.ts';

export const PostList = ({ posts, postId, onClickPost }: PostListProps) => {
  return (
    <div>
      <h1>포스트 목록</h1>
      <div className="post-list">
        {posts.map((post) => (
          <h3
            key={post.id}
            className={`post-list-item ${postId === post.id ? 'target' : ''}`}
            onClick={() => {
              onClickPost(post.id);
            }}
          >
            <div>{post.id}</div>
            <div>{post.title}</div>
          </h3>
        ))}
      </div>
    </div>
  );
};

type PostListProps = {
  posts: Post[];
  postId: number | undefined;
  onClickPost: (id: number) => void;
};
