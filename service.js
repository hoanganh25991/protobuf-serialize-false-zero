module.exports = {
  name: 'greeter',
  actions: {
    willReturnFalse() {
      // return 'false';
      // return false;
      return 0;
      // return 1;
      // return 5;
      // return null; // -> undefined obj.data = Buffer.from(obj.data) => CANT EXECUTE
      // return undefined; // -> undefined
    },

    // willReturnZero() {
    //   return {
    //     value: 0,
    //   };
    // },

    // willReturnFalse() {
    //   return {
    //     value: false,
    //   };
    // },

    willReturnZero() {
      return 1;
    },

    willReturnLiteral() {
      return 5;
    },
  },
};
