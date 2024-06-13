# send exactly 1000 requests with 100 concurrent requests
ab -n 10000 -c 100 http://127.0.0.1:3000/