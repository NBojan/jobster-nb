import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStats } from "../../features/allJobs/allJobsSlice";
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa';
import { ChartContainer, StatCard } from "../../components";

const Stats = () => {
    const { stats, isLoading } = useSelector(store => store.allJobs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStats());    
    }, [])

    const defaultStats = [
        {
            title: 'pending applications',
            count: stats.pending || 0,
            icon: <FaSuitcaseRolling />,
            color: "#e9b949",
            bcg: "#fcefc7"
        },
        {
            title: 'interviews scheduled',
            count: stats.interview || 0,
            icon: <FaCalendarCheck />,
            color: "#647acb",
            bcg: "#e0e8f9"
        },
        {
            title: 'jobs declined',
            count: stats.declined || 0,
            icon: <FaBug />,
            color: "#d66a6a",
            bcg: "#ffeeee"
        },
    ];

    if(isLoading) return <div className="loading"></div>
    return (  
        <Wrapper className="containerBoot m-auto">
            <div className="stats mb-48">
                {defaultStats.map((stat, index) => <StatCard key={index} {...stat} />)}
            </div>

            <ChartContainer />
        </Wrapper>
    );
}

const Wrapper = styled.section`
    padding: 32px 0;

    .stats {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .err-msg {
        color: var(--clr-grey-4);
    }

    .chart {
        margin: 32px 0;
    }
`
export default Stats;