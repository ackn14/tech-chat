<template>
  <v-app-bar
    app
    :dark="!isScrollPoint"
    :height="appBarHeight"
    :color="toolbarStyle.color"
    :elevation="toolbarStyle.elevation"
  >
    <app-logo @click.native="goTo('scroll-top')" />
    <v-toolbar-title>
      {{ appName }}
    </v-toolbar-title>

    <v-spacer />

    <v-toolbar-items class="ml-2">
      <v-btn
        v-for="(menu, i) in menus"
        :key="`menu-btn-${i}`"
        text
        @click="goTo(menu.title)"
      >
        {{ $t(`menus.${menu.title}`) }}
      </v-btn>
    </v-toolbar-items>
    <!-- スクロール量確認 {{ scrollY }} -->
  </v-app-bar>
</template>

<script>
import AppLogo from "~/components/ui/appLogo";
export default {
  components: {
    AppLogo
  },
  props: {
    menus: {
      type: Array,
      default: () => []
    },
    imgHeight: {
      type: Number,
      default: 0
    }
  },
  data({ $config: { appName }, $store }) {
    return {
      appName,
      scrollY: 0,
      appBarHeight: $store.state.styles.beforeLogin.appBarHeight
    };
  },
  computed: {
    isScrollPoint() {
      return this.scrollY > this.imgHeight - this.appBarHeight;
    },
    toolbarStyle() {
      const color = this.isScrollPoint ? "white" : "transparent";
      const elevation = this.isScrollPoint ? 4 : 0;
      return { color, elevation };
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    // データで用意した scrollYにウィンドウのスクロール値を代入する。
    onScroll() {
      this.scrollY = window.scrollY;
    },
    goTo(id) {
      this.$vuetify.goTo(`#${id}`);
    }
  }
};
</script>