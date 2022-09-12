import { defineConfig } from "@shopify/hydrogen/config"

export default defineConfig({
  shopify: {
    storeDomain: "fuelofthefuture.myshopify.com",
    storefrontToken: "862159be1a9fc716f200bf886d1362c9",
    storefrontApiVersion: "2022-07",
  },
  logger: {
    showQueryTiming: true,
  },
})
