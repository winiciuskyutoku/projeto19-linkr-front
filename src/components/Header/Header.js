import { useRef, useState } from "react";
import { ArrowDown, ArrowUp, ContainerHeader, User } from "./HeaderStyle";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { DebounceInput } from "react-debounce-input";
import axios from "axios";

export default function Header() {
    const [arrowActive, setArrowActive] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [filteredProfiles, setFilteredProfiles] = useState([]);
    const userRef = useRef(null);
    const researchRef = useRef(null);
    const userImage = JSON.parse(localStorage.getItem("user")).user_photo;
    const navigate = useNavigate();

    function research(e) {
        setSearchValue(e.target.value);
        if(e.target.value.length<3) return;

        const url = `${process.env.REACT_APP_RENDER_URL}/get-users`;
        const body = { search: e.target.value };

        axios.post(url, body).then((sucess) => {
            setFilteredProfiles(sucess.data);
        }).catch((error) => {
            console.log(error.response);
            setSearchValue('');
        });
    }

    function active(e) {
        e.stopPropagation();
        setArrowActive(true);
    }
    function logout() {
        localStorage.removeItem("user");
        navigate('/sign-in');
    }
    function logoutPosition() {
        const userRect = userRef.current.getBoundingClientRect();
        const top = userRect.bottom;
        const left = userRect.left;
        const width = userRect.width;
        const position = "absolute";
        const backgroundColor = "black";
        const borderRadius = "10px";
        const border = "solid 1px rgba(0, 0, 0, 0.5)";
        const zIndex = "1";
        return { top, left, width, position, backgroundColor, borderRadius, border, zIndex };
    };
    function researchPosition() {
        const userRect = researchRef.current.getBoundingClientRect();
        const top = userRect.bottom - 7;
        const left = userRect.left;
        const width = userRect.width;
        const position = "absolute";
        const backgroundColor = "white";
        const borderRadius = "5px";
        const border = "solid 1px rgba(0, 0, 0, 0.1)";
        const zIndex = "1";
        return { top, left, width, position, backgroundColor, borderRadius, border };
    };

    return (
        <ContainerHeader onClick={() => setArrowActive(false)}>
            <h1 onClick={()=>navigate("/timeline")}>linkr</h1>
            <DebounceInput element={InputStyled}
                type="text"
                placeholder="Pesquisar usuários"
                minLength={3}
                debounceTimeout={300}
                onChange={(e) => research(e)}
                inputRef={researchRef}
            />
            {
                searchValue.length === 0 ? '' :
                <div style={{ ...researchPosition() }}>
                    <ul>
                        {filteredProfiles.map((profile, index) => (
                            <Item key={index} onClick={() => {
                                setSearchValue('');
                                navigate(`/user-page/${profile.user_id}`);
                            }}>
                                <img data-test="avatar" src={profile.user_photo} alt="" />
                                <p>{profile.username}</p>
                            </Item>
                        ))}
                    </ul>
                </div>
            }
            {
                arrowActive ?
                    <User ref={userRef}>
                        <ArrowUp onClick={() => setArrowActive(false)} />
                        <img src={userImage} alt="" onClick={() => setArrowActive(false)}/>
                    </User>
                    :
                    <User ref={userRef}>
                        <ArrowDown onClick={(e) => active(e)} />
                        <img src={userImage} alt="" onClick={(e) => active(e)}/>
                    </User>

            }
            {arrowActive &&
                <span style={{ ...logoutPosition() }}>
                    <p onClick={()=>logout()}>Logout</p>
                </span>
            }
        </ContainerHeader>
    );
}

const InputStyled = styled.input`
    width: 60%;
    height: 45px;
    overflow: hidden;
    z-index: 1;

    border: solid 1px rgba(212, 212, 212, 1);
    border-radius: 5px;
    outline: 0;

    box-sizing: border-box;
    padding: 10px;
    font-size: 18px;
    font-weight: 400;
`;

const Item = styled.li`
    padding: 2%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    &:hover{
        background-color: #f2f2f2;
    }
    img{
        width: 50px;
        height: 50px;
        border-radius: 60px;
        margin-right: 3%;
        border: solid 1px rgba(0, 0, 0, 0.3);
        object-fit: cover;
    }
`
