import DaysTable from "../components/DaysTable";
import { connect } from "react-redux";
import { updateCheckedDays, checkDay } from "../actions/actions";

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
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(DaysTable);