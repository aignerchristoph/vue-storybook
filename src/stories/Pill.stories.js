import MyPill from "./Pill.vue";

export default {
  title: "Example/Pill",
  component: MyPill,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyPill },
  template: '<my-pill :pill="pill"/>',
});

export const Primary = Template.bind({});
Primary.args = {
  pill: {
    label: "Ägypten",
    price: 342,
    url: "https://www.restplatzboerse.at/urlaub/aegypten-lid-143/",
  },
};
