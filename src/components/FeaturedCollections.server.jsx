import { Link, Image } from "@shopify/hydrogen"

export default function FeaturedCollections({ featuredCollections }) {
  return (
    <section
      className="w-full gap-4 md:gap-8 grid p-6 md:p-8 lg:p-12"
      id="latest-collection"
    >
      <h2 className="whitespace-pre-wrap max-w-prose font-bold text-lead text-xl">
        View our latest collections / / Find your fit.
      </h2>
      <div className="grid-flow-row grid gap-2 gap-y-6 md:gap-4 lg:gap-6 grid-cols-1 false sm:grid-cols-3 false false">
        {featuredCollections.nodes.map((collection) => {
          return (
            <Link key={collection.id} to={`/collections/${collection.handle}`}>
              <div className="grid gap-4">
                {collection?.image && (
                  <Image
                    className="rounded shadow-border overflow-clip inline-block aspect-[5/4] md:aspect-[3/2] object-cover"
                    width={"100%"}
                    height={600}
                    alt={`Image of ${collection.title}`}
                    data={collection.image}
                  />
                )}
                <h2 className="whitespace-pre-wrap max-w-prose font-medium text-copy">
                  {collection.title}
                </h2>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
