run:
	pkill -9 node
	HOST=8080 nohup npm run production &

build: 
	npm run build
