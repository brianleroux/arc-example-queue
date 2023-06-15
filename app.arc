@app
queue-example

@http
get /
post /q

@queues
bg

@aws
# profile default
region us-west-2
architecture arm64
