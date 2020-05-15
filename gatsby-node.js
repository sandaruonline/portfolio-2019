const path = require('path')
const generateImage = require('./functions/socialImage')

//Build our social media (twitter/og) images using canvas
generateImage({
  title: 'Dan Spratling Freelance developer & designer',
  slug: 'home',
})
generateImage({
  title: 'Contact me about your next project',
  slug: 'contact',
})
generateImage({
  title: 'Explore recent projects & find inspiration',
  slug: 'projects',
})
generateImage({
  title: 'Keep up to date with the latest articles',
  slug: 'blog',
})
// generateImage({ title: '', slug: 'uses' })

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  //get data from contentful, assigning the values we need
  const { data } = await graphql(`
    query {
      posts: allContentfulPost {
        edges {
          node {
            id: contentful_id
            title
            slug
          }
        }
      }
      projects: allContentfulProject {
        edges {
          node {
            id: contentful_id
            title
            slug
          }
        }
      }
    }
  `)

  //create project pages from data
  data.projects.edges.forEach(({ node }) => {
    const seoImage = generateImage({
      title: `From my portfolio: ${node.title}`,
      slug: node.slug,
    })

    createPage({
      path: `/projects/${node.slug}`,
      component: path.resolve('./src/templates/project.js'),
      context: {
        id: node.id,
        seoImage: seoImage,
      },
    })
  })

  //create blog posts from data
  data.posts.edges.forEach(({ node }) => {
    const seoImage = generateImage({
      title: node.title,
      slug: node.slug,
    })

    createPage({
      path: `/blog/${node.slug}`,
      component: path.resolve('./src/templates/post.js'),
      context: {
        id: node.id,
        seoImage: seoImage,
      },
    })
  })
}
