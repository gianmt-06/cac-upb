#Node
# cd client
npm init -y 
npm i typescript
npm i ts-standard -D

#tsconfig.json
tsc --init
## "build": "tsc -w" ## add script from package.json

#Dirs
mkdir -p src docs build test config 
mkdir -p src/view src/controller src/model src/components src/router
touch src/main.ts

#ENV
touch ./config/.development.env
echo 'PORT=5000' >> './config/.development.env'
echo 'HOST=localhost' >> './config/.development.env'

#MVC
mkdir -p src/controller src/model src/view
