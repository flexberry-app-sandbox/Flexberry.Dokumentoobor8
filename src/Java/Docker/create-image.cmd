docker build --no-cache -f SQL\Dockerfile.PostgreSql -t dokumentoobor8-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t dokumentoobor8-java/app ../../..
