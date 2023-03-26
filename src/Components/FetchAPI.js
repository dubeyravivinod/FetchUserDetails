import { useState, useEffect } from 'react';
import './styles.css';


const FetchAPI = (props) => {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    

    console.log("Inside the Set API...");
    console.log("Props Data --> ", props.opt);
    
    useEffect(() => {
        
        const url = "https://randomuser.me/api/?results=10";
        const fetchInfo = async () => {
            try{
                console.log("URL :: ", url);
                const response = await fetch ("https://randomuser.me/api/?results=100");
                const data = await response.json();
                console.log("Response Data:: ", data.results);
                setData(data.results);
                setLoading(false);
            }
            catch (error) {
                console.log("Error While Fetching the Data:: ", error);
                setError(error);
            }
        }
        fetchInfo();

    }, [])

    if(error) {
        return <>
            <p style={{color: "red"}}>{error}</p>
        </>
    }
    else if(loading) {
        return <>
            <p>Loading....</p>
        </>
    }
    else if(!loading) {
        if(props.opt !== "all"){
        return (
            <div className='FetchMain'>
                <div className='mainDiv'>
                <table>
                    <thead>
                    <tr>
                        <th>IMAGE</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>GENDER</th>
                    </tr>
                    </thead>
                    <tbody>
                        {data.filter(gender => gender.gender === props.opt).map(user => (
                            <tr>
                                <td><img src={user.picture.large} alt={user.name.first} /></td>
                                <td>{user.name.first}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                            </tr>
                        ))} 
                    </tbody>
                </table>
                </div>
            </div>
        );}
        else {
            return (<div className='FetchMain'>
                <div className='mainDiv'>
                <table>
                    <thead>
                    <tr>
                        <th>IMAGE</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>GENDER</th>
                    </tr>
                    </thead>
                    <tbody>
                        {data.map(user => (
                            <tr>
                                <td><img src={user.picture.large} alt={user.name.first} /></td>
                                <td>{user.name.first}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                            </tr>
                        ))} 
                    </tbody>
                </table>
                </div>
            </div>);
        }
    }
}

export default FetchAPI;