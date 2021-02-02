import { Layout } from '../../components/common/Layout'
import { getPostBySlug } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHTML'

const Article = ({ post }) => {
  return (
    <Layout>
      <div className="flex flex-row justify-center">
        <article
          className="prose lg:prose-xl max-w-prose"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></article>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  return { paths: [{ params: { slug: 'noknangnual' } }], fallback: false }
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, ['title', 'author', 'content', 'coverImage'])

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

export default Article
