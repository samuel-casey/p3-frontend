import React, { useContext } from 'react';
import LogOutBtn from '../LogOutBtn/LogOutBtn';
import { GlobalContext } from '../../App';

export default function TestNav() {
	const { gState, setGState } = useContext(GlobalContext);

	return gState.token ? <LogOutBtn /> : null;
}
