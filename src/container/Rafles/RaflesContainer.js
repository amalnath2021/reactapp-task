import store from "../../store";
import { connect } from "react-redux";
import RaflesReveal from "../../pages/RaflesPage/RaflesReveal";
import { withRouter } from "react-router-dom";
import {getRaflesTagList} from '../../actions/RaflesActions';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
   getRaflesDetails() {
       dispatch(getRaflesTagList());
   }

   
   
  };
};

const mapStateToProps = (state) => {
  const rafles = store.getState().rafles;
  console.log("container RAfles:",rafles);
  return {
    rafles,
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RaflesReveal));
