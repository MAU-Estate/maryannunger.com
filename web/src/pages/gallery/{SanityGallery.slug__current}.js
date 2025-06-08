import React from 'react'
import { Link, graphql } from 'gatsby'
import GalleryModal from '../../components/GalleryModal'
import Icon from '../../components/Icon'
import Seo from '../../components/Seo'

export default function gallery({
  location,
  data: {
    sanityGallery: { images, slug, backUrl, seo },
  },
}) {
  let _slug = slug.current

  const backPath =
    backUrl === '/'
      ? `/#${_slug}`
      : backUrl === 'press'
        ? `/${backUrl}#${_slug}`
        : `/${backUrl}/${_slug}`

  return (
    <div className="fixed inset-0 pt-12 pb-8 z-30 bg-white flex">
      <Seo {...seo} />
      <Link to={backPath} className="absolute z-30 top-0 right-0">
        <Icon
          name="modalClose"
          className="sm-only:w-6 sm-only:h-6 w-12 h-12 m-4"
        />
      </Link>
      <div className="mx-6 md:container--large flex flex-1">
        <GalleryModal location={location} slides={images} theme="light" />
      </div>
    </div>
  )
}

export const galleryQuery = graphql`
  query ($id: String) {
    sanityGallery(id: { eq: $id }) {
      seo {
        description
        title
        image {
          ...Image
        }
      }
      slug {
        current
      }
      backUrl
      images {
        ... on SanityFigure {
          _key
          _type
          ...figure
        }
        ... on SanityTwoColImage {
          _key
          _type
          imageL {
            _key
            _type
            ...figure
          }
          imageR {
            _key
            _type
            ...figure
          }
        }
      }
    }
  }
`
