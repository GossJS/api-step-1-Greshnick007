# api-step-1
first step of microservice API

https://kodaktor.ru/g/02102017

My answer

curl -X GET "https://homework-goss-07102017.herokuapp.com/users" - getAll
curl -X GET "https://homework-goss-07102017.herokuapp.com/users/user" - get single user
curl -X POST -d "username=gena&password=bukin" "https://homework-goss-07102017.herokuapp.com/users" - add New User
curl -X PUT -d "username=gena&password=bukin&new_pass=crocodile" "https://homework-goss-07102017.herokuapp.com/users" - Update info about user
curl -X DELETE -d "username=gena&password=bukin" "https://homework-goss-07102017.herokuapp.com/users" - Delete user

curl -X GET "https://homework-goss-07102017.herokuapp.com/actions/a/b" - addition
curl -X POST "https://homework-goss-07102017.herokuapp.com/actions/a/b" - subtraction
curl -X PUT "https://homework-goss-07102017.herokuapp.com/actions/a/b" - multiply
curl -X DELETE "https://homework-goss-07102017.herokuapp.com/actions/a/b" - divide

curl -X DELETE "https://homework-goss-07102017.herokuapp.com/actions/a1/b1/c1/a2/b2/c2" - kramer