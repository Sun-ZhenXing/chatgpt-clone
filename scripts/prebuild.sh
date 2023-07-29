docker build -t chatgpt-clone-files -f ./docker/prebuild.dockerfile .
docker run -itd --name temp-files chatgpt-clone-files cd
docker cp temp-files:/app/dist ./dist
