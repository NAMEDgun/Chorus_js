import Layout from "../components/layout";

const NewPost = () => (
  <Layout>
    <h1>새로운 게시물 작성</h1>
    <form>
      <label>
        제목:
        <input type="text" />
      </label>
      <br />
      <label>
        내용:
        <textarea />
      </label>
      <br />
      <button type="submit">게시물 작성</button>
    </form>
  </Layout>
);

export default NewPost;
