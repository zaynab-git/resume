import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Resume from "../views/Resume.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
    children: [
      {
        path: "/about/resume_1",
        name: "Resume_1",
        component: Resume,
        props: {
          name: "ZEYNAB HEYDARZADEH",
          major: "COMPUTER ENGINEERING",
          image: 'zeynab',
          education: "B.Sc. in computer engineering at Amirkabir university of technology",
          profile: "I am an enthusiastic, responsible and hard working person. I am able to work well both in a team environment as well as using own initiative."
        }
      },
      {
        path: "/about/resume_2",
        name: "Resume_2",
        component: Resume,
        props: {
          name: "SAMANE SHARIATI",
          major: "CIVIL ENGINEERING",
          image: 'samane',
          education: "B.Sc. in civil engineering at Amirkabir university of technology",
          profile: "A self-starter and quick learner. Versatile skill set with experience in customer service, sales, and written and oral communication. Received multiple awards for excellence in customer service."
    
        }
      }    ]
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
