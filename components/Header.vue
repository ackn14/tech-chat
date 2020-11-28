<template>
  <header class="fixed top-0 bg-lightblue w-full h-16 py-4 z-10">
    <div class="relative flex justify-center w-full">
      <!-- 戻るボタン -->
      <template v-if="isChatPage">
        <nuxt-link
          to="/"
          class="absolute left-20 flex items-center justify-center no-underline"
        >
          <i class="material-icons text-4xl text-white">chevron_left</i>
        </nuxt-link>
      </template>

      <h1 class="text-2xl font-semibold text-white">チャット</h1>
      <signupLink />
      <loginLink />
    </div>
  </header>
</template>

<script>
import firebase from "firebase";
import signupLink from "~/components/beforeLogin/signupLink";
import loginLink from "~/components/beforeLogin/loginLink";
export default {
  components: {
    signupLink,
    loginLink
  },
  middleware({ store, redirect }) {
    if (!store.$auth.loggedIn) {
      redirect("/login");
    }
  },

  computed: {
    user() {
      return this.$auth.user;
    },
    isChatPage() {
      return this.$route.path.match(/\/rooms\/[A-Za-z0-9]*/);
    }
  },
  methods: {
    logout() {
      this.$auth.logout();
    }
  }
};
</script>
