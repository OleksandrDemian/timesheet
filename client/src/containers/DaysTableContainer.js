import DaysTable from "../components/DaysTable";
import { connect } from "react-redux";
import { updateCheckedDays, checkDay, checkAll } from "../actions/actions";

const mapStateToProps = state => {
    return {
        days: state.daysRepo
    }
};

const mapDispatchToProps = dispatch => ({
    updateCheckedDays: value => {
        dispatch(updateCheckedDays(value));
    },
    checkDay: (inMonth, action) => {
        dispatch(checkDay(inMonth, action));
    },
    checkAll: action => {
        dispatch(checkAll(action));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(DaysTable);