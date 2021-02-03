import { Layout } from '../../components/common/Layout'
import { getPostBySlug } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHTML'

const Article = ({ post }) => {
  return (
    <Layout>
      <div className="max-w-prose mx-auto">
        <h1 className="mt-4 text-2xl md:text-4xl font-bold mx-6 mb-4">{post.title}</h1>
        <article
          className="prose mx-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></article>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'TUSC' } },
      { params: { slug: 'AIC' } },
      { params: { slug: 'Arts-Spanish' } }
    ],
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, ['title', 'author', 'content', 'coverImage'])

  const content = await markdownToHtml(post.content || '')

  console.log(content)

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
