#Node
# cd client
npm init -y 
npm i typescript
npm i ts-standard -D

#tsconfig.json
tsc --init
## "build": "tsc -w" ## add script from package.json

#Dirs
mkdir -p src docs build test config # estructure
mkdir -p src/shared src/helper src/util
mkdir -p src/application src/domain src/infrastructure # clean architecture
mkdir -p src/application src/application/service src/aplication/usecase # app
mkdir -p src/domain src/domain/model src/domain/port src/domain/port/driver src/domain/port/driven #domain
mkdir -p src/infrastructure src/infrastructure/config # infraestructure

mkdir -p src/shared src/helper src/util
touch src/main.ts
