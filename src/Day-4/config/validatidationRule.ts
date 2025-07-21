const validationRules={
  "/register": {
    username: { required: true, type: "string" },
    password: { required: true, type: "string", minLength: 8 }
  },
  "/login": {
    username: { required: true, type: "string" },
    password: { required: true, type: "string" }
  }
} ;

export default validationRules