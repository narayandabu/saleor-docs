module.exports = {
  main: [
    {
      Overview: [
        "overview/introduction",
        "overview/architecture",
        "overview/features",
        "overview/resources",
      ],
    },
    {
      Guides: [
        "developer/channels",
        "developer/products",
        "developer/attributes",
        {
          type: "category",
          label: "Checkout",
          items: [
            "developer/checkout/overview",
            "developer/checkout/lines",
            "developer/checkout/stock",
            "developer/checkout/address",
            "developer/checkout/finalizing",
            "developer/checkout/order-to-checkout",
          ],
        },
        "developer/payments",
        "developer/stock-allocation",
        "developer/discounts",
        "developer/gift-cards",
        "developer/address",
        "developer/users",
        "developer/permissions",
        "developer/taxes",
        "developer/thumbnails",
        "developer/filtering",
        {
          type: "category",
          label: "Data Imports",
          items: ["developer/bulks/bulk-orders"],
        },
      ],
    },
    {
      type: "category",
      label: "API Usage",
      items: [
        {
          type: "autogenerated",
          dirName: "api-usage",
        },
      ],
    },
    {
      type: "category",
      label: "Saleor Cloud",
      items: ["cloud"],
    },
    {
      type: "category",
      label: "Saleor CLI",
      items: ["cli"],
    },
    {
      type: "category",
      label: "Exporting Data",
      items: [
        "developer/export/export-overview",
        "developer/export/export-products",
        "developer/export/export-gift-cards",
      ],
    },
    {
      type: "category",
      label: "Saleor App Store",
      items: [
        "developer/app-store/overview",
        "developer/app-store/development",
        "developer/app-store/forking",
        {
          type: "category",
          label: "Apps",
          items: [
            "developer/app-store/apps/overview",
            "developer/app-store/apps/taxes",
            "developer/app-store/apps/crm",
            "developer/app-store/apps/adyen",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Extending Saleor",
      items: [
        "developer/extending/overview",
        require("./sidebars/apps-sidebar"),
        {
          type: "category",
          label: "Plugins",
          items: [
            "developer/extending/plugins/overview",
            "developer/extending/payment-gateways",
            {
              type: "category",
              label: "Internal APIs",
              items: [
                "developer/extending/api/errors",
                "developer/extending/api/events",
                "developer/extending/api/sorters",
                "developer/extending/api/i18n",
              ],
            },
            {
              type: "category",
              label: "Available Plugins",
              items: [
                "developer/available-plugins/admin-emails",
                "developer/available-plugins/adyen",
                "developer/available-plugins/dummy-credit-card",
                "developer/available-plugins/stripe",
                "developer/available-plugins/oidc",
                "developer/available-plugins/np-atobarai",
                "developer/available-plugins/user-emails",
              ],
            },
          ],
        },
        "developer/extending/apollo-federation",
        "developer/metadata",
      ],
    },
    {
      type: "category",
      label: "Self-hosting",
      items: [
        "setup/docker-compose",
        "setup/docker-images",
        "setup/configuration",
        "setup/read-replicas",
        "setup/windows",
        {
          type: "category",
          label: "Development",
          items: [
            "developer/running-saleor/debugging-emails",
            "developer/running-saleor/exposing-instance",
          ],
        },
        {
          type: "category",
          label: "Deploying",
          items: [
            "setup/deploy-do",
            "setup/deploy-heroku",
            "setup/deploy-kubernetes",
            "setup/deploy-linux",
          ],
        },
        {
          type: "category",
          label: "Monitoring",
          items: ["setup/monitoring-jaeger", "setup/monitoring-sentry"],
        },
        {
          type: "category",
          label: "Storing Files",
          items: ["setup/media-gcs", "setup/media-s3"],
        },
        {
          type: "category",
          label: "Upgrade Guides",
          items: [
            "setup/upgrading",
            "upgrade-guides/2-11-to-3-0",
            "upgrade-guides/3-0-to-3-1",
            "upgrade-guides/3-1-to-3-2",
            "upgrade-guides/3-5-to-3-6",
            "upgrade-guides/3-11-to-3-12",
            "upgrade-guides/3-12-to-3-13",
            "upgrade-guides/3-13-to-3-14",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Community",
      items: [
        "developer/community/contributing",
        "developer/community/faq",
        "developer/community/support",
      ],
    },
  ],
  api: [...require("./docs/api-reference/sidebar-schema.js").schemaSidebar],
  storefrontApi: [
    ...require("./docs/api-storefront/sidebar-schema.js").schemaSidebar,
  ],
};
