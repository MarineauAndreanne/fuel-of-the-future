import { Link } from "@shopify/hydrogen"

const GenderCollections = ({ genderCollections }) => {
  return (
    <>
      {Object.values(genderCollections).map((collection, i) => {
        const imageIsLeft = i % 2 === 0

        return (
          <section className="grid lg:grid-cols-2 p-8">
            {imageIsLeft ? (
              <>
                <div>
                  <CollectionImage collection={collection} />
                </div>
                <div>
                  <CollectionDetails collection={collection} left />
                </div>
              </>
            ) : (
              <>
                <div>
                  <CollectionDetails collection={collection} />
                </div>
                <div>
                  <CollectionImage collection={collection} />
                </div>
              </>
            )}
          </section>
        )
      })}
    </>
  )
}

const CollectionImage = ({ collection }) => (
  <>
    <div className="lg:hidden">
      <h1 className="py-6 tracking-wide hover:tracking-widest hover:cursor-pointer">
        <Link to={`/collections/${collection.handle}`}>
          {collection.title} / /{" "}
        </Link>
      </h1>
    </div>
    <img
      src={collection.image?.url}
      alt={collection.image?.altText}
      className="lg:w-[50vw] overflow-hidden rounded-lg opacity-90"
    />
  </>
)

const CollectionDetails = ({ collection, left }) => (
  <div className="pl-[10rem] pt-[16rem] hidden lg:block">
    <h1 className="lg:text-8xl pb-5">{collection.title}</h1>
    <h1 className="lg:text-xl leading-loose hover:cursor-pointer hover:tracking-widest">
      <Link to={`/collections/${collection.handle}`}>
        {left ? <span>← Walk this way</span> : <span>Go with the flow →</span>}
      </Link>
    </h1>
  </div>
)

export default GenderCollections
