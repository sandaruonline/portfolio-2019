import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faIndustry,
  faMapMarkerAlt,
  faLink,
  faPoll,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons'
// import { trackPageview } from 'fathom-client'
import Layout from '../components/layout/Layout'
import Markdown from '../components/Markdown'
import Contact from '../components/sections/Contact'

const ProjectTemplate = ({ data, pageContext }) => {
  const { seoImage } = pageContext

  //Get the page sections from the graphql data
  const contact = data.contact
  const {
    heading,
    body,
    testimonial,
    featuredImage,
    artboardDesktop,
    artboardMobile,
    url,
    industries,
    location,
    results,
  } = data.project

  // trackPageview()

  return (
    <Layout
      title={`${heading} Project - Dan Spratling's projects`}
      description={`See my impact on ${heading}, the tools and skills required for the build and the outcome`}
      imagePath={seoImage}
    >
      <section id="intro" className="pt-12 md:py-32">
        <div className="container mx-auto">
          <div className="flex flex-wrap text-white -mx-6 md:mb-8 items-center">
            <div className="w-full md:w-2/5 my-8 px-6 md:pr-12">
              <h1 className="text-3xl text-bold text-green-500 mb-4">
                {heading}
              </h1>
              <p className="text-6xl leading-tight">{testimonial.quote}</p>
            </div>
            <div className="w-full md:w-3/5 md:p-10 bg-gray-900 p-6">
              <Image fluid={featuredImage.fluid} className="rounded-md" />
            </div>
          </div>
        </div>
      </section>

      <section id="case-study" className="mb-40">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 lg:gap-20 items-start">
            <ul className="bg-gray-900 md:max-w-300 -mx-6 md:mx-0 py-3">
              <DetailListItem
                title="Company"
                description={heading}
                icon={faBuilding}
              />
              <DetailListItem
                title="Industry"
                description={industries[0].title}
                icon={faIndustry}
              />
              <DetailListItem
                title="Location"
                description={location}
                icon={faMapMarkerAlt}
              />
              <DetailListItem
                title="Website"
                description={
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <span className="pr-2">Visit site</span>
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </a>
                }
                icon={faLink}
              />
              <DetailListItem
                title="Results"
                description={results.childMdx.body}
                icon={faPoll}
                markdown
              />
            </ul>

            <div className="md:col-span-2">
              <div className="w-full md:w-3/4 mb-40 lg:my-0">
                <Markdown className="pt-4 pb-8 text-gray-300">
                  {body.childMdx.body}
                </Markdown>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="artboard" className="w-full  pt-16 mt-16">
        {/* <h1 className="text-4xl text-green-500">This is some test text</h1> */}
        <Image
          fluid={[
            artboardMobile.fluid,
            {
              ...artboardDesktop.fluid,
              media: `(min-width: 768px)`,
            },
          ]}
        />
      </section>
      {/* <section id="projects">

      </section> */}
      <Contact
        heading={contact.heading}
        body={contact.body}
        link={contact.link}
        promoCards={contact.promoCards}
      />
    </Layout>
  )
}

const DetailListItem = ({ title, description, icon, markdown = false }) => {
  return (
    <li className="flex items-baseline -mx-2 py-6 px-6">
      <div className="flex-0 mx-2">
        <FontAwesomeIcon icon={icon} className="text-lg" />
      </div>
      <div className="flex-0 mx-2">
        <p className="font-bold leading-loose">{title}</p>
        {markdown ? (
          <Markdown className="text-sm text-gray-300">{description}</Markdown>
        ) : (
          <p className="text-sm text-gray-300">{description}</p>
        )}
      </div>
    </li>
  )
}

//Graphql query getting all the data we need from contentful (gatsby-config.js)
export const query = graphql`
  query getProject($id: String!) {
    project: contentfulProject(contentful_id: { eq: $id }) {
      heading: title
      body {
        childMdx {
          body
        }
      }
      testimonial: quote {
        quote
      }
      featuredImage {
        fluid(maxWidth: 1140) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      artboardDesktop: previewImage {
        fluid(maxWidth: 2560, quality: 100) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      artboardMobile: previewImage {
        fluid(maxWidth: 600, maxHeight: 500, quality: 75) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      url
      industries {
        title
      }
      location
      results {
        childMdx {
          body
        }
      }
    }
    contact: contentfulUpsell(contentful_id: { eq: "4mHctjQb5jro7JZqzfIeax" }) {
      promoCards: cards {
        heading: title
        body
        icon
      }
      heading: title
      body {
        childMdx {
          body
        }
      }
      link {
        heading: title
        to: link
      }
    }
  }
`

export default ProjectTemplate
