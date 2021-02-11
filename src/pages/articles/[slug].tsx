import { Layout } from '../../components/common/Layout'
import { getAllPosts, getPostBySlug } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHTML'
import Footer from '../../components/common/Footer'

const Article = ({ post }) => {
  return (
    <Layout>
      {post === 'loadstat' ? (
        <img className="w-11/12 mx-auto" src="/assets/articles/stat/gradstat.jpg" />
      ) : post === 'loadadmission' ? (
        <iframe
          className="w-full"
          src="https://drive.google.com/file/d/1V59y328M1Y2Ja7oouPHApa3opiUEj1X9/preview"
          width="640"
          height="1000"
        ></iframe>
      ) : (
        <div className="mx-auto max-w-prose my-14">
          <h1 className="mx-6 mt-4 mb-4 text-2xl font-bold md:text-4xl">{post.title}</h1>
          <article
            className="mx-6 prose lg:prose-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></article>
        </div>
      )}
      <Footer />
    </Layout>
  )
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'], '_articles')

  const urls = posts.map(posts => {
    return {
      params: {
        slug: posts.slug
      }
    }
  })

  urls.push({
    params: {
      slug: 'statistic'
    }
  })

  urls.push({
    params: {
      slug: 'admission'
    }
  })

  return {
    paths: urls,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  if (params.slug === 'statistic') {
    return {
      props: {
        post: 'loadstat'
      }
    }
  } else if (params.slug === 'admission') {
    return {
      props: {
        post: 'loadadmission'
      }
    }
  } else {
    const post = getPostBySlug(
      params.slug,
      ['title', 'author', 'content', 'coverImage'],
      '_articles'
    )

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
}

export default Article
