import React from "react";
import { useSelector, useDispatch } from "react-redux";
import HobbyList from "../components/Home/HobbyList/index";
import { addNewHobby, setActiveHobby } from "../actions/hobby";
import casual from "casual-browserify";

HomePage.propTypes = {};

function HomePage(props) {
    // strict comparison
    const hobbyList = useSelector((state) => state.hobby.list);
    const activeId = useSelector((state) => state.hobby.activeId);

    // shallow comparison
    // const hobbyState = useSelector((state) => ({
    //     list: state.hobby.list,
    //     activeId: state.hobby.activeId,
    // }), shallowEqual);

    const dispatch = useDispatch();

    console.log("Hobby list:", hobbyList);

    const handleAddHobbyClick = () => {
        // Random a hobby object: id + title
        const newHobby = {
            id: casual.uuid,
            title: casual.title,
        };
        // Dispatch action to add a new hobby to redux store
        const action = addNewHobby(newHobby);
        dispatch(action);
    };

    const handleHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby);
        dispatch(action);
    };

    return (
        <div className="home-page">
            <h1>Home Page</h1>

            <button onClick={handleAddHobbyClick}>Random Hobby</button>

            <HobbyList
                hobbyList={hobbyList}
                activeId={activeId}
                onHobbyClick={handleHobbyClick}
            ></HobbyList>
        </div>
    );
}

export default HomePage;
