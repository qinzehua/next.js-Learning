import { PostMeta } from "..";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Layout from "../../components/layout";

interface Post {
  id: string;
}

export default function Post({ id }: Post) {
  const router = useRouter();
  return (
    <Layout>
      <div>pss: {id}</div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async function ({
  params,
}) {
  return {
    props: {
      id: params?.id,
    },
  };
};
