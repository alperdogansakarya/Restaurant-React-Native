import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 6R3FpP_SeagZEwMcJEbgiUQrYp6uyGj3BN_CrEoGpmASxdW-Zaa91vPFvFUBWWPtZAppI1bqKhoAJn3N3kIo575b8ZHL1xn0eezchDas1FgRKqble3V7z84Np-pPZXYx',
    },
})