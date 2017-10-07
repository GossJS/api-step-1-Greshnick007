import {User} from '../../bd/mongoconn';
import bodyParser from 'body-parser';
import _ from 'lodash';



export default x=>{
  const rtr = x.Router();

  rtr
    .route('/')
    .get(async r=>{
        const list = await User.find();
        r.res.json(
          list.map( x=> {
               const {username, password} = x;
               return {login: username, password};
          })
        )
    })
    .post(async r=> {
       const {username, password} = r.body;
       const x  = await User.findOne({username, password});
       if (x) return r.res.send('User already exists!');
       const newUser = new User( {username, password} );
       r.res.json( await newUser.save() );

    })
    .delete(async r=> {
       const {username, password} = r.body;
       const x  = await User.findOneAndRemove({username, password});
       if (x) {
        r.res.json(x);
       } else {r.res.json("Not Found")}

    })
    .put(async r=> {
      const {username, password, new_pass} = r.body;
      const x  = await User.findOne({username, password});
      if (x) { x.password = new_pass;
      r.res.json( await x.save() );
      } else {r.res.json("Not Found")}
    })
  ;

  rtr
    .route('/:username')
    .get(async r=>{
        const {username} = r.params;
        const result = await User.findOne({username});
        r.res.json( result  )
    })
  ;


  return rtr;
}
