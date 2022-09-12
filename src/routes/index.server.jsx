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
      <section
        className={
          "relative justify-end flex flex-col w-full top-[-2rem] h-screen"
        }
      >
        <div className="relative">
          <img
            src={
              "https://images.pexels.com/photos/1250643/pexels-photo-1250643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt={"alt text"}
            className="w-full h-full object-cover opacity-75"
          />
          <span className="absolute bottom-[40rem] left-[2rem] lg:bottom-[10rem] lg:left-[5rem] lg:text-white">
            <h1 className="text-2xl lg:text-5xl mb-3">With you Everywhere.</h1>
            <a
              className="text-l lg:text-2xl cursor-pointer text-zinc-600 pl-1 hover:text-white"
              href="#latest-collection"
            >
              View Our Latest Collections →
            </a>
          </span>
        </div>
      </section>

      <GenderCollections genderCollections={genderCollections} />

      <section id="latest-collection">
        <FeaturedCollections featuredCollections={featuredCollections} />
      </section>
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
