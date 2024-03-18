import React, {useState, useEffect} from 'react'
import {getRandomInt} from './../../utils/utils'
import './style.sass'

export default function Table({list:propsList=[]}) {
    const [list, setList] = useState(JSON.parse(JSON.stringify(propsList)));
    const [activationInterval, setActivationInterval] = useState();
    const [borderWidth, setBorderWidth] = useState(`0px`);

    useEffect(() => {
        const interval = setInterval(() => {
            const unactiveItems = list.filter(item => !item.active);
            const randomIndex = getRandomInt(0, unactiveItems.length);
            const unactiveItem = unactiveItems[randomIndex];

            setList(prevState => prevState.map(item => {
                if(item === unactiveItem) item.active = true;
                return  item;
            }));
        }, 1000);

        setActivationInterval(interval);

        return () => {
            clearInterval(interval);
        }
    }, [])

    useEffect(() => {
        const unactiveItems = list.filter(item => !item.active);

        if(!unactiveItems.length){
            clearInterval(activationInterval);
            setBorderWidth(`10px`);
        }

    }, [list]);

    const trClass = (item) => {
        const classes = [];

        item.active && classes.push(`active`);

        return classes.join(` `);
    }

  return list.length ? <table style={{borderWidth}}>
    <tbody>
        {
            list.map((item, index) => <tr className={trClass(item)} key={index}>
                <td>{item.type}</td>
                <td>{item.icon}</td>
            </tr>)
        }
    </tbody>
  </table> : null;
}