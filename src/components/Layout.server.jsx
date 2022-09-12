import { Suspense } from "react"
import { useShopQuery, CacheLong, gql, Seo } from "@shopify/hydrogen"

import Header from "./Header.client"
import Footer from "./Footer.client"

export function Layout({ children }) {
  return (
    <>
      <Suspense>
        <DefaultSEO />
      </Suspense>
      <div className="flex flex-col min-h-screen antialiased bg-neutral-50">
        <div className="">
          <a href="#mainContent" className="sr-only">
            Skip to content
          </a>
        </div>

        <Suspense fallback={<Header shop={{ name: "Fuel of the future." }} />}>
          <HeaderWithQuery />
        </Suspense>

        <main role="main" id="mainContent" className="flex-grow">
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}

const HeaderWithQuery = () => {
  const { shop } = useLayoutQuery()
  return <Header shop={shop} />
}

const DefaultSEO = () => {
  const { shop } = useLayoutQuery()
  return (
    <Seo
      type="defaultSeo"
      data={{
        title: shop.name,
        description: shop.description,
      }}
    />
  )
}

function useLayoutQuery() {
  const {
    data: { shop },
  } = useShopQuery({
    query: SHOP_QUERY,
    cache: CacheLong(),
    preload: "*",
  })

  return { shop }
}

const SHOP_QUERY = gql`
  query layout {
    shop {
      name
      description
    }
  }
`
