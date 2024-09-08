run: build
	pkill -9 node
	HOST=8080 nohup npm run production &

build: 
	npm run build_client 
	npm run build_server
	npm run build
