import './styles.css'

export function Card({ name, time, nationality}) {
    return (
        <div className='card'>
            <strong>{ name }</strong>
            <p>{ nationality }</p>
            <small>{ time }</small>
        </div>
    )
}