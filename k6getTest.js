import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 500,
  duration: "30s"
};

// Read operations testing
export default function() {
  const id = Math.floor(Math.random() * 10000000 + 1);
  const res = http.get(`http://localhost:3004/listings/${id}/recommendations`);
  check(res, {
    "status was 200": r => r.status === 200,
    "transaction time OK": r => r.timings.duration < 200
  });
  sleep(0.01);
}
