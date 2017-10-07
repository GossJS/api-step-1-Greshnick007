import {User} from '../../bd/mongoconn';
import bodyParser from 'body-parser';
import _ from 'lodash';



export default x=>{
  const rtr = x.Router();

 rtr
    .route('/:a/:b')
    .get(async r=>{
      const {a, b} = r.params;
        r.res.json(String(Number(a)+Number(b)));
    })
    .post(async r=> {
      const {a, b} = r.params;
        r.res.json(String(Number(a)-Number(b)));
    })
    .delete(async r=> {
      const {a, b} = r.params;
        r.res.json(String(Math.floor(Number(a)/Number(b))));
    })
    .put(async r=> {
     const {a, b} = r.params;
        r.res.json(String(Number(a)*Number(b)));
    })
  ;

 rtr
    .route('/kramer/:a1/:b1/:c1/:a2/:b2/:c2')
    .get(async r=>{
      const {a1, b1, c1, a2, b2, c2} = r.params;
      let delta = Number(a1) * Number(b2) - Number(b1) * Number(a2);
      let delta1 = Number(c1) * Number(b2) - Number(b1) * Number(c2);
      let delta2 = Number(c1) * Number(a2) - Number(a1) * Number(c2);
        r.res.json(`{'x':${delta1 / delta},'y':${delta2 / delta}}`);
    });


  return rtr;
}
