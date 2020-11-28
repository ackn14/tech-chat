export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/assets/css/tailwind.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/firebase", "~/plugins/auth", "~/plugins/user"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/vuetify",
    // アプリの多言語化
    // https://github.com/lewyuburi/nuxt-validate#configuration
    [
      "nuxt-validate",
      {
        nuxti18n: {
          locale: {
            // nuxt-i18n と VeeValidate のlocale名の差分を埋めるための設定
            // nuxt-i18n の locale : VeeValidate の locale
            "pt-BR": "pt_BR"
          }
        }
      }
    ],
    // nuxt-i18nの設定
    // https://nuxt-community.github.io/nuxt-i18n/options-reference.html
    [
      "nuxt-i18n",
      {
        locales: ["ja", "en", "pt-BR"],
        defaultLocale: "ja",
        vueI18n: {
          fallbackLocale: "ja"
        }
      }
    ]
  ],

  i18n: {
    locales: ["ja", "en"], // アプリの対応言語
    defaultLocale: "ja", // アプリが使用する標準言語
    vueI18n: {
      fallbackLocale: "ja", // 標準言語に翻訳対象のキーがない時の参照言語
      silentFallbackWarn: true, // i18nの警告表示をする or しない
      messages: {
        ja: require("./locales/ja.json"),
        en: require("./locales/en.json")
      }
    }
  },
  publicRuntimeConfig: {
    appName: process.env.APP_NAME // 追加
  },
  vuetify: {
    themes: {
      light: {
        primary: "4080BE",
        info: "4FC1E9",
        success: "44D69E",
        warning: "FEB65E",
        error: "FB8678",
        background: "f6f6f4",
        myblue: "1867C0"
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
