cmd=$1
app=$2

handleDirectoryError() {
  directory=$1
  if ! [[ -d $directory ]]; then
    echo  "Directory not found"
    echo  "Please create the module first"
    exit 1
  fi
}

makeModule() {
  src=${1}
  app=${2}
  if ! [[ -d $src ]]; then
    mkdir $src
  fi
  mkdir ${src}/${app} ${src}/${app}/shared ${src}/${app}/helper ${src}/${app}/util
  mkdir ${src}/${app}/application ${src}/${app}/application/service ${src}/${app}/application/usecase
  mkdir ${src}/${app}/domain ${src}/${app}/domain/model ${src}/${app}/domain/port ${src}/${app}/domain/port/driver ${src}/${app}/domain/port/driven
  mkdir ${src}/${app}/infrastructure ${src}/${app}/infrastructure/config

  touch ${src}/${app}/shared/.gitkeep 
  touch ${src}/${app}/helper/.gitkeep
  touch ${src}/${app}/util/.gitkeep
  touch ${src}/${app}/application/service/.gitkeep
  touch ${src}/${app}/application/usecase/.gitkeep
  touch ${src}/${app}/domain/model/.gitkeep
  touch ${src}/${app}/domain/port/driver/.gitkeep
  touch ${src}/${app}/domain/port/driven/.gitkeep
  touch ${src}/${app}/infrastructure/config/config.ts
}