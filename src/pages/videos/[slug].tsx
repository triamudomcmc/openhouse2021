import { Layout } from '../../components/common/Layout'
import { getAllPosts, getPostBySlug } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHTML'
import Footer from '../../components/common/Footer'

const Videos = ({ post }) => {
  return (
    <Layout>
      <div className="flex flex-row justify-center w-full">
        <div className="w-7/12">
          <iframe src={post.video} width="640" height="480" className="w-full"></iframe>
          <article
            className="mx-6 prose lg:prose-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></article>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'], '_videos')

  return {
    paths: posts.map(posts => {
      return {
        params: {
          slug: posts.slug
        }
      }
    }),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, ['title', 'video'], '_videos')

  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  }
}

export default Videos
