# mediatel

# client deploy

cd client
rm -rf build
npm install
npm run build
cd build
mtel 'rm -rf /var/www/mediatelcommunication.com/./*'
scp -i ~/.ssh/personal -r . root@64.227.130.233:/var/www/mediatelcommunication.com/

# deploy server
cd server
rm -rf node_modules 
rm -rf build
rm -rf .tmp
rm -rf .strapi 
mtel 'pm2 stop strapi-app'
mtel 'find /var/www/dashboard/ -mindepth 1 -maxdepth 1 ! -name 'public' ! -name '.env' -exec rm -rf {} +'

rsync -avz -e "ssh -i ~/.ssh/personal" --exclude 'public' --exclude '.env' . root@64.227.130.233:/var/www/dashboard/
mtel 'cd /var/www/dashboard/ && npm i'
mtel 'pm2 restart strapi-app'


# prod env

HOST=0.0.0.0
PORT=1337
APP_KEYS=gDoKj29SKV5508QfuI0hqw==,xnNpMer+w9Ji+doWJAx/Lg==,n/w3e6DOSGGpwFdwveqpGg==,Hjc4LHIr0diBDalwO3nGHw==
API_TOKEN_SALT=t3YIMP1HdF2H3Sly1kmkeQ==
ADMIN_JWT_SECRET=CrfezENZzqHtxV1YbCZWBQ==
TRANSFER_TOKEN_SALT=9QCWKDwcm/YSz1IWdfNsWg==
JWT_SECRET=GEQjco882AcVV+PXwHTazw==
# Database
DATABASE_CLIENT=mysql2
DATABASE_HOST=127.0.0.1
DATABASE_PORT=3306
DATABASE_NAME=media7bw
DATABASE_USERNAME=media7bw_telnew
DATABASE_PASSWORD=Telnew@1
DATABASE_SSL=false