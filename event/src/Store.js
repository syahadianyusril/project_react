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
  listNewsNew: [],
  listEvents: [],
  categori:"",
  dateCari: ""
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
          console.log(state.username, state.is_login);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  getEvents: async state => {
    const data = {
      listEvents: state.listEvents
    };
    await axios
    .get("http://api.eventful.com/json/events/search?app_key=r9Qx5XGnmjct7CMF&location=indonesia&date=future")
    .then ( response => {
        store.setState({
            listEvents: response.data.events.event
            });
        console.log("hasil ambil", this.listEvents);
        }) 
    .catch(function(error) {});
  },

  searchEvents : async (value, keyword) => {
    if (keyword.length > 2) {
      try {
        const response = await axios.get(
          "http://api.eventful.com/json/events/search?app_key=r9Qx5XGnmjct7CMF&location=" + keyword + "&date=future" 
        );
        console.log("aaaaaaaaaa", keyword)
        console.log("bbbbb", response);
        store.setState({ listEvents: response.data.events.event });
        console.log("cccc", store.getState().listEvents);

      } catch (error) {
        console.error(error);
      }
    }
    else{
      try {
        const response = await axios.get("http://api.eventful.com/json/events/search?app_key=r9Qx5XGnmjct7CMF&location=indonesia&date=future"
          );
        console.log("aaaaaaaaaa", keyword)
        console.log("bbbbb", response);
        store.setState({ listEvents: response.data.events.event });
        console.log("cccc", store.getState().listEvents);

      } catch (error) {
        console.error(error);
      }
    }
  },
  searchCategory : async (value, keyword) => {

    try {
      const response = await axios.get(
        "http://api.eventful.com/json/events/search?app_key=r9Qx5XGnmjct7CMF&category=" + keyword + "&date=future"
      );
      console.log(response);
      store.setState({listEvents: response.data.events.event });
    } catch (error) {
      console.log(error);
    }
  },
  searchEventDate : async (value, keyword) => {
    var tahun  = keyword.slice(0,4) 
    var bulan = keyword.slice(5,7)
    var tanggal = keyword.slice(8,10)
    var tanggal1 = parseInt(tanggal) + 1
    var jadi = tahun + bulan + tanggal + "00-" + tahun + bulan + tanggal1.toString() + "00"
    console.log("jadi",jadi)
    try {
      const response = await axios.get(
        "http://api.eventful.com/json/events/search?app_key=r9Qx5XGnmjct7CMF&location=indonesia&date=" + jadi
      );
      console.log(response);
      store.setState({listEvents: response.data.events.event });
    } catch (error) {
      console.log(error);
    }
  }  
});
