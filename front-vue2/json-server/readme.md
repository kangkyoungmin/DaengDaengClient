### json-server 명령어
npm i -g json-server
json-server --watch db.json --port 3002
npm install -D json-server json-server-auth
json-server db.json -m ../node_modules/json-server-auth --port 3005