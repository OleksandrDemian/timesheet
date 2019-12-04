import MonthChooser from "../components/MonthChooser";
import { connect } from "react-redux";
import { confirmDate } from "../actions/actions";

const mapStateToProps = state => ({
    _month: state.appRepo.month,
    _year: state.appRepo.year
});

const mapDispatchToProps = dispatch => ({
    confirmDate: confirmData => {
        dispatch(confirmDate(confirmData));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MonthChooser);