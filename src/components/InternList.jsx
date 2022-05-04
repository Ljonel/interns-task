import React from "react";
import { NavLink } from "react-router-dom";
import { InternsContainer, List } from "../styles/InternListStyles";
import edit from "../assets/icons/edit.svg";
import useGetInterns from "../hooks/useGetInterns";

const InternList = () => {
  const interns = useGetInterns();

  return (
    <InternsContainer>
      <h1>Participants</h1>
      <List>
        {interns.map(({ id, name }) => (
          <div className="list-element" key={id}>
            <p>{name}</p>
            <NavLink to={`/interns/${id}`}>
              <img src={edit} alt="edit" />
              Edit
            </NavLink>
          </div>
        ))}
      </List>
    </InternsContainer>
  );
};

export default InternList;
