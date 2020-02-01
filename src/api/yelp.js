import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer DET9q89gDgWXyLG_tUU2MzbReol-9ggbIQBo4dTXGWadv9cRePTjpUAUV_iANKxu843lzEVFlo2Od_a_bX7IXUPtRRA-SMFknrwgw5_HzkOG685sHAOiOe7EecAyXnYx"
  }
});
