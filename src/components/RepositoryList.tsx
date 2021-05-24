import { useState, useEffect } from 'react'
import { RepositoryItem } from "./RepositoryItem"

import '../styles/repositories.scss'

interface Repository {
    name: string;
    description: string;
    html_url: string;
}
const url = 'https://api.github.com/user/cortella/repos'

export function RepositoryList(){
    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [repositories])
    return(
        <section className= "repository-list">
            <h1>Lista de Repositorios</h1>
            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository}/>
                })}
            </ul>

        </section>
    )
}