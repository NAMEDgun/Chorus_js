import { useRouter } from "next/router";
import Layout from "../../components/layout";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <h1>게시물 {id}</h1>
      <p>게시물 내용을 여기에 표시합니다.</p>
    </Layout>
  );
};

export default Post;
