import {connect} from "react-redux";
import PeopleSkills from "../../components/people/people_skills";
import {GetAllPeople} from "../../actions/people/people";

function mapStateToProps(state) {
    return {
        AllPeople : state.people_r.people.data,
        PeopleSelected  :state
    };
}
function mapDispatchToProps(dispatch) {
    return {
    GetAllPeople_c: () => dispatch(GetAllPeople())
    };
}
const PeopleSkillsContainer = connect(mapStateToProps, mapDispatchToProps)(PeopleSkills);
export default PeopleSkillsContainer;