import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import {useEffect, useState} from "react";

export default function EffectSection() {
    const [isModalOpened, setIsModalOpened] = useState(false);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    async function fetchData() {
        setLoading(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setData(data);
        console.log(data);
        setLoading(false);
    }

    useEffect(() => {fetchData()},
        [])

    function openModal() {
        setIsModalOpened(true);
    }

    return (
        <section>
            <h3>Effects</h3>
            <Button onClick={()=> openModal()}>Open Information</Button>

            <Modal isOpen={isModalOpened}>
                <h3>Hello from Modal</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequatur culpa doloribus eveniet non odit officiis perspiciatis sunt suscipit. Deserunt dignissimos dolorum ex, iure nam nisi repellendus vitae voluptatem voluptates.</p>
                <Button onClick={()=> setIsModalOpened(false)}>Close</Button>
            </Modal>
            {loading && <p>Loading...</p>}
            {!loading && <ul>
                {data.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>}
        </section>
    )
}
