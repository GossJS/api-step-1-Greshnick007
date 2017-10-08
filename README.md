# api-step-1
first step of microservice API<br/>
<br/>
https://kodaktor.ru/g/02102017<br/>
<br/>
My answer<br/>
<br/>
curl -X GET "https://homework-07102017.herokuapp.com/users" - getAll<br/>
curl -X GET "https://homework-07102017.herokuapp.com/users/user" - get single user<br/>
curl -X POST -d "username=gena&password=bukin" "https://homework-07102017.herokuapp.com/users" - add New User<br/>
curl -X PUT -d "username=gena&password=bukin&new_pass=crocodile" "https://homework-07102017.herokuapp.com/users" - Update info about user<br/>
curl -X DELETE -d "username=gena&password=bukin" "https://homework-07102017.herokuapp.com/users" - Delete user<br/>
<br/>
curl -X GET "https://homework-07102017.herokuapp.com/actions/a/b" - addition<br/>
curl -X POST "https://homework-07102017.herokuapp.com/actions/a/b" - subtraction<br/>
curl -X PUT "https://homework-07102017.herokuapp.com/actions/a/b" - multiply<br/>
curl -X DELETE "https://homework-07102017.herokuapp.com/actions/a/b" - divide<br/>
<br/>
curl -X DELETE "https://homework-07102017.herokuapp.com/actions/a1/b1/c1/a2/b2/c2" - kramer<br/>