import Link from "next/link";

const posts = [
  { id: "1", title: "첫 번째 게시물" },
  { id: "2", title: "두 번째 게시물" },
  { id: "3", title: "세 번째 게시물" },
];

const IndexPage = () => (
  <div>
    <h1>게시판</h1>
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/post/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default IndexPage;
