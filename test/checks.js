import http from 'k6/http';
import { check } from "k6";

export const options = {
    vus: 20,
    duration: '20s',
    thresholds: {
        'http_req_failed': ['rate<0.1'],
        'http_req_duration': [{
            threshold: "p(95)<620",
            abortonFail: true,
            delayAbortEval: "10s",
    }]
    },
}


export default function () {
    const response = http.get("https://fierce-brook-83918.herokuapp.com/api/v1/products");
    check(response, {
        'is status 200': (r) => r.status === 200,
        'is response time < 200ms': (r) => r.timings.duration < 200,
        'is response body not empty': (r) => r.body.length > 0,
    });

}

//k6 cloud checks.js