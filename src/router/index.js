import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Resume from "../components/Resume.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/resume_1",
    name: "Resume_1",
    component: Resume,
    props: {
      name: "ZEYNAB HEYDARZADEH",
      major: "COMPUTER ENGINEERING",
      image: 'zeynab',
      chartDataSet: {
        HTML: 12,
        CSS: 12,
        JavaScript: 6,
        "React/Redux": 6,
        SQL: 12,
        python: 12,
        C: 6,
        java: 12,
        BootStrap: 6,
        Git: 6,
      },
      education: "B.Sc. in computer engineering at Amirkabir university of technology",
      profile: "I am an enthusiastic, responsible and hard working person. I am able to work well both in a team environment as well as using own initiative."
    }
  },
  {
    path: "/resume_2",
    name: "Resume_2",
    component: Resume,
    props: {
      name: "SAMANE SHARIATI",
      major: "CIVIL ENGINEERING",
      image: 'samane',
      chartDataSet: {
        HTML: 3,
        CSS: 4,
        JavaScript: 5,
        "React/Redux": 7,
        SQL: 1,
        python: 12,
        C: 5,
        java: 2,
        BootStrap: 8,
        Git: 6,
      },
      education: "B.Sc. in civil engineering at Amirkabir university of technology",
      profile: "A self-starter and quick learner. Versatile skill set with experience in customer service, sales, and written and oral communication. Received multiple awards for excellence in customer service."

    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
