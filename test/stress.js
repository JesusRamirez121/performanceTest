import { sleep } from 'k6';
import http from 'k6/http';

export const options = {
    stages: [
        { duration: '2m', target: 50 }, // Ramp-up to 50 users
        { duration: '5m', target: 50 }, // Stay at 50 users
        { duration: '2m', target: 100 }, // Ramp-up to 100 users
        { duration: '2m', target: 100 }, // Stay at 100 users
    ],
};

export default function () {
    let response = http.get("http://api.escuelajs.co/api/v1/products");
    //sleep(1);
}

//k6 run --out influxdb=http://localhost:8086/myk6db stress.js
//k6 run --out cloud stress.js
