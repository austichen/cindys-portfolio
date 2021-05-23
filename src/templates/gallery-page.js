import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PhotoCarousel from '../components/PhotoCarousel'

export const GalleryPageTemplate = ({ images }) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <PhotoCarousel images={images} />
        </div>
    </section>
  )
}

GalleryPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string])),
}

const GalleryPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <GalleryPageTemplate
        images={post.frontmatter.images}
      />
    </Layout>
  )
}

GalleryPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default GalleryPage

export const galleryPageQuery = graphql`
  query GalleryPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        images {
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
