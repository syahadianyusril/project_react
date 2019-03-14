import createStore from "unistore";
import axios from "axios";

const initialState = {
  api_key: "",
  email: "",
  password: "",
  full_name: "",
  username: "",
  is_login: false,
  listNews: [],
  listNewsNew: []
};

export const store = createStore(initialState);

export const actions = store => ({
  setField: (state, e) => {
    return { [e.target.name]: e.target.value };
  },
  postSignout: state => {
    return { is_login: false };
  },
  postLogin: async state => {
    const data = {
      username: state.username,
      password: state.password
    };
    const self = this;
    await axios
      .post("https://syahadians.free.beeceptor.com/auth", data)
      .then(response => {
        if (response.data.hasOwnProperty("api_key")) {
          store.setState({
            api_key: response.data.api_key,
            is_login: true,
            full_name: state.username,
            email: state.email
          });
          console.log(state.username);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  newsBlog: async state => {
    const data = {
      listNews: state.listNews,
      listNewsNew: state.listNewsNew
    };
    await axios
      .all([
        axios.get("https://newsapi.org/v2/everything?q=indonesia&apiKey=79ea232ad60645a8a122c07c03321932"), 
        axios.get("https://newsapi.org/v2/top-headlines?country=id&apiKey=79ea232ad60645a8a122c07c03321932")
      ])
      .then(
        axios.spread(function(response1, response2) {
          store.setState({ listNews: response1.data.articles });
          store.setState({ listNewsNew: response2.data.articles });
        })
      )
      .catch(function(error) {});
  },
  searchNews : async (value, keyword) => {
    if (keyword.length > 2) {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=" + keyword + "&apiKey=79ea232ad60645a8a122c07c03321932"
        );
        console.log(response);
        store.setState({ listNews: response.data.articles });
      } catch (error) {
        console.error(error);
      }
    }
  },
  searchCategory : async (value, keyword) => {
    console.log("searchCategory", value);
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=" + keyword + "&apiKey=79ea232ad60645a8a122c07c03321932"
      );
      console.log(response);
      store.setState({listNews: response.data.articles });
    } catch (error) {
      console.log(error);
    }
  } 
});
