import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { modalHandle, userData } from "../storage/action/loginAction";

const SellBtn = (props) => {
  const history = useHistory();

  const sellPage = () => {
    if (props.user !== null) {
      history.push("/sell");
    } else {
      props.modalHandler(true);
    }
  };
  return (
    <div className="sell-btn-div">
      <div className="_21nYN ml-4 user-select-none" onClick={sellPage}>
        <svg width="104" height="48" viewBox="0 0 1603 768" className="_3V9PS">
          <g>
            <path className="_2bClX _12yOz" d="M434.442 16.944h718.82c202.72 0 367.057 164.337 367.057 367.058s-164.337 367.057-367.057 367.057h-718.82c-202.721 0-367.058-164.337-367.058-367.058s164.337-367.058 367.058-367.058z"></path>
            <path className="_2bClX _YBz-" d="M427.241 669.489c-80.917 0-158.59-25.926-218.705-73.004l-0.016-0.014c-69.113-54.119-108.754-131.557-108.754-212.474 0-41.070 9.776-80.712 29.081-117.797 25.058-48.139 64.933-89.278 115.333-118.966l-52.379-67.581c-64.73 38.122-115.955 90.98-148.159 152.845-24.842 47.745-37.441 98.726-37.441 151.499 0 104.027 50.962 203.61 139.799 273.175h0.016c77.312 60.535 177.193 93.887 281.22 93.887h299.699l25.138-40.783-25.138-40.783h-299.698z"></path>
            <path className="_2bClX _3uYj7" d="M1318.522 38.596v0c-45.72-14.369-93.752-21.658-142.762-21.658h-748.511c-84.346 0-165.764 21.683-235.441 62.713l3.118 51.726 49.245 15.865c54.16-31.895 117.452-48.739 183.073-48.739h748.511c38.159 0 75.52 5.657 111.029 16.829v0c44.91 14.111 86.594 37.205 120.526 66.792l66.163-57.68c-43.616-38.010-97.197-67.703-154.957-85.852z"></path>
            <path className="_2bClX BfroU" d="M1473.479 124.453l-55.855 9.91-10.307 47.76c61.844 53.929 95.92 125.617 95.92 201.88 0 25.235-3.772 50.26-11.214 74.363-38.348 124.311-168.398 211.129-316.262 211.129h-448.812l25.121 40.783-25.121 40.783h448.812c190.107 0 357.303-111.638 406.613-271.498 9.572-31.009 14.423-63.162 14.423-95.559 0-98.044-43.805-190.216-123.317-259.551z"></path>
          </g>
        </svg>

        <div className="DrSmZ">
          <span className="EgzsJ">
            <svg width="16px" height="16px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fillRule="evenodd">
              <path className="rui-367TP" d="M414.898 123.739v291.218h-291.218l-97.014 97.014 97.014 97.131h291.218v291.16l97.073 97.071 97.073-97.071v-291.16h291.16l97.131-97.131-97.131-97.014h-291.16v-291.218l-97.073-97.073z"></path>
            </svg>
          </span>
          <span>Sell</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    modal: state.loginReducer.modal,
    user: state.loginReducer.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    modalHandler: (trigger) => dispatch(modalHandle(trigger)),
    userData: (data) => dispatch(userData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SellBtn);