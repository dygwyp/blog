#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn docs:build

# 进入生成的文件夹，这里是默认的路径，可以自定义
cd blogs

# 如果是发布到自定义域名
# echo 'www.isunbeam.cn' > CNAME
git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:dygwyp/blog.git master:blogs
# git push -f git@github.com:isunbeam/Blogs.git master:blogs

cd -

# 最后发布的时候执行 bash deploy.sh