import { Suspense } from "react"
import FeaturedCollections from "../components/FeaturedCollections.server"
import { Layout } from "../components/Layout.server"
import Hero from "../components/Hero"
import GenderCollections from "../components/GenderCollections.server"
import { CacheLong, gql, useShopQuery } from "@shopify/hydrogen"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Suspense fallback={<div />}>
        <HomepageContent />
      </Suspense>
    </Layout>
  )
}

function HomepageContent() {
  const {
    data: { women, men, featuredCollections },
  } = useShopQuery({
    query: QUERY,
    cache: CacheLong(),
    preload: true,
  })

  const genderCollections = { men, women }

  return (
    <>
      <GenderCollections genderCollections={genderCollections} />

      <FeaturedCollections featuredCollections={featuredCollections} />
    </>
  )
}

const QUERY = gql`
  query HomeQuery {
    women: collection(id: "gid://shopify/Collection/412055372000") {
      ...CollectionDetails
    }
    men: collection(id: "gid://shopify/Collection/412055339232") {
      ...CollectionDetails
    }
    featuredCollections: collections(
      first: 15
      query: "collection_type:smart"
      sortKey: UPDATED_AT
    ) {
      nodes {
        id
        title
        handle
        image {
          altText
          width
          height
          url
        }
      }
    }
  }
  fragment CollectionDetails on Collection {
    title
    image {
      url
      altText
    }
    handle
  }
`
