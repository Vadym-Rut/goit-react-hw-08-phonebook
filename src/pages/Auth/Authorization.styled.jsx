import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const AuthContainer = styled.div`
	width: 100vw;
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;
`

export const AuthWrapper = styled.div`
  position: relative;

  width: 500px;

  padding: 0 40px;

  font-size: 18px;
  color: #d4d4d4;

  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

export const NavWrapper = styled.nav`
	display: flex;
	justify-content: center;
	gap: 30px;

	margin-bottom: 30px;
	padding: 20px;

	border-bottom: 2px solid #ffffff88;
`

export const AuthLink = styled(NavLink)`
	color: #ebeaea;

	&.active {
		color: #0abcf1;
	}
`