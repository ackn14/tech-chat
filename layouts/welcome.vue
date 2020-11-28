<template>
  <v-app>
    <!-- img-heightでスクロール時の画像の高さを検知する -->
    <wel-app-bar :menus="menus" :img-height="imgHeight" />
    <v-img
      id="scroll-top"
      dark
      src="https://d1f5hsy4d47upe.cloudfront.net/73/731746eb777b5b9b66d4a8cb382240c4_t.jpeg"
      gradient="to top right, rgba(19,84,122,.6), rgba(0,204,255,.9)"
      :height="imgHeight"
    >
      <v-row
        align="center"
        justify="center"
        :style="{ height: `${imgHeight}px` }"
      >
        <v-col cols="12" class="text-center">
          <h1 class="display-1 mb-4">
            スポーツの力で多くの人に笑顔と勇気を
          </h1>
          <!-- :style="{ height: ${imgHeight}px }" … イメージの上に乗せるコンテンツの高さを指定。 -->
          <h4 class="subheading" :style="{ letterSpacing: '5px' }">
            スポーツボランティアアプリ「〇〇〇〇」
          </h4>
        </v-col>
      </v-row>
    </v-img>

    <v-sheet>
      <v-container fluid :style="{ maxWidth: '1280px' }">
        <v-row v-for="(menu, i) in menus" :key="`menu-${i}`">
          <v-col :id="menu.title" 　cols="12">
            <v-card flat>
              <v-card-title class="justify-center display-1">
                {{ $t(`menus.${menu.title}`) }}
              </v-card-title>
              <v-card-text class="text-center">
                {{ menu.subtitle }}
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12">
            <div :is="`wel-${menu.title}`" />
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <befLoginFooter />
  </v-app>
</template>

<script>
import welAppBar from "~/components/welcome/welAppBar";
import welAboutPortfolio from "~/components/welcome/welAboutPortfolio";
import welProfile from "~/components/welcome/welProfile";
import befLoginFooter from "~/components/beforeLogin/befLoginFooter";

export default {
  components: {
    welAppBar,
    welAboutPortfolio,
    welProfile,
    befLoginFooter
  },

  data() {
    return {
      imgHeight: 700,
      menus: [
        {
          title: "aboutPortfolio",
          subtitle: "このサイトはポートフォリオ紹介サイトです"
        },
        { title: "profile", subtitle: "このサイトを作ったのはこんな人です" }
      ]
    };
  }
};
</script>
