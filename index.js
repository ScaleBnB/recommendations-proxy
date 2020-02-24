const nr = require("newrelic");
const axios = require("axios");
const express = require("express");
const app = express();
const port = 3004;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static("public")); // for serving static files

// Recommendations Proxy Response
app.get("/listings/:id", (req, res) => {
  axios
    .get(`http://localhost:3002/listings/${req.params.id}`)
    .then(({ data }) => {
      res.json(data);
    })
    .catch(error => {
      console.log(error);
    });
});

app.get("/listings/:id/recommendations", (req, res) => {
  axios
    .get(`http://localhost:3002/listings/${req.params.id}/recommendations`)
    .then(({ data }) => {
      res.json(data);
    })
    .catch(error => {
      console.log(error);
    });
});

app.post("/listings/:id/recommendations", (req, res) => {
  axios
    .get(`http://localhost:3002/listings/${req.params.id}/recommendations`)
    .then(({ data }) => {
      res.json(data);
    })
    .catch(error => {
      console.log(error);
    });
});

app.patch("/listings/:id/recommendations", (req, res) => {
  axios
    .get(`http://localhost:3002/listings/${req.params.id}/recommendations`)
    .then(({ data }) => {
      res.json(data);
    })
    .catch(error => {
      console.log(error);
    });
});

app.delete("/listings/:id/recommendations/:recId", (req, res) => {
  axios
    .get(
      `http://localhost:3002/listings/${req.params.id}/recommendations/${req.params.recId}`
    )
    .then(({ data }) => {
      res.json(data);
    })
    .catch(error => {
      console.log(error);
    });
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

//original APIs
// // Calendar Proxy Response
// app.get("/month", (req, res) => {
//   axios
//     .get("http://3.16.164.208:3001", {
//       params: req.query
//     })
//     .then(({ data }) => {
//       res.json(data);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// });

// // Image Carousel Proxy Response
// app.get("/gallery/:id", (req, res) => {
//   var id = req.query.id;
//   axios
//     .get(`http://13.57.225.193:3000/gallery/${id}`)
//     .then(({ data }) => {
//       res.json(data);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// });

// // Reviews Proxy Response
// app.get("/api/0", (req, res) => {
//   axios
//     .get(`http://13.57.226.2:3003/:3003/api/0`)
//     .then(({ data }) => {
//       res.json(data);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// });
