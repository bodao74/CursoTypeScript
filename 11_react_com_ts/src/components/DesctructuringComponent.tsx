import React from 'react'

interface Props {
    title: string;
    content: string;
    commentsQty: number;
    tags: string[];
    category: Category;
}

export enum Category {
    JS = 'JavaScript',
    TS = 'TypeScript',
    P = 'Python'
}

const DesctructuringComponent = ({ title, content, commentsQty, tags, category }: Props) => {
    return (
        <div>DesctructuringComponent
            <h3>{title}</h3>
            <p>{content}</p>
            <p>{commentsQty}</p>
            <p>{tags.map((tag) => (<span>#{tag} </span>))}
            </p>
            <p>{category}</p>
        </div>
    )
}

export default DesctructuringComponent