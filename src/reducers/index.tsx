import { loginReducer } from "./LoginReducer";
import {transactionReducer} from "./TransactionReducer"


let allReducers = {
  sharedLibs_transaction:transactionReducer,
  sharedLibs_login:loginReducer
}
//allReducers["gasabbs"] = transactionReducer;
export default allReducers