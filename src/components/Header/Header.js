import { useRef, useState } from "react";
import { ArrowDown, ArrowUp, ContainerHeader, User } from "./HeaderStyle";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const [arrowActive, setArrowActive] = useState(false);
    const userRef = useRef(null);
    const navigate = useNavigate();

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

    function active(e) {
        e.stopPropagation();
        setArrowActive(true);
    }
    function logout() {
        localStorage.removeItem("auth");
        navigate('/');
    }

    return (
        <ContainerHeader onClick={() => setArrowActive(false)}>
            <h1>linkr</h1>
            {
                arrowActive ?
                    <User ref={userRef}>
                        <ArrowUp onClick={() => setArrowActive(false)} />
                        <div onClick={() => setArrowActive(false)}></div>
                    </User>
                    :
                    <User ref={userRef}>
                        <ArrowDown onClick={(e) => active(e)} />
                        <div onClick={(e) => active(e)}></div>
                    </User>

            }
            {arrowActive &&
                <span style={{ ...logoutPosition() }}>
                    <p onClick={logout}>Logout</p>
                </span>
            }
        </ContainerHeader>
    );
}
