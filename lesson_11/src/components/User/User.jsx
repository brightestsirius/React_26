import React, {useState, useEffect} from 'react'

import useQueryParams from '../../hooks/useQueryParams'

import service from '../../services/jsonplaceholder';

export default function User() {
    const userId = useQueryParams(`userId`);
    const [user, setUser] = useState({});

    useEffect(() => {
        (async () => {
            const response = await service.get(`users`, userId);
            setUser(response);
        })();
    }, [])


  return Object.keys(user).length ? <ul>
    <li>{user.name}</li>
    <li>{user.email}</li>
  </ul> : null
}