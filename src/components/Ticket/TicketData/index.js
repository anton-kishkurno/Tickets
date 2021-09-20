import React from 'react'

const TicketData = props => {
    const { origin, destination, date, stops, duration } = props

    const getAllTime = time => {
        const minuts = time % 60
        const hours = (time - (time%60)) / 60
        return `${hours}ч ${minuts}м`
    }

    const getStops = stop => {
        switch(stop.length){
        case 1: return `1 пересадка`
        case 2: return `2 пересадки`
        case 3: return `3 пересадки`
        default: return `нет пересадок`
        }
    }

    const getDate = (date, duration) => {
        const startDate = new Date(date) 
        const hours = startDate.getHours()
        let minuts = startDate.getMinutes()
        let endMinuts = (minuts + duration) % 60
        let endHours = ((minuts + duration) - endMinuts) / 60
        endHours = (endHours + hours) % 24
        minuts = minuts < 10 ? '0' + minuts : minuts
        endMinuts = endMinuts < 10 ? '0' + endMinuts : endMinuts
        return `${hours}:${minuts} - ${endHours}:${endMinuts}`
    }
    
    return (
        <div className="ticket__row">
        <div className="ticket__col">
            <p className="ticket__value">{origin} – {destination}</p>
            <p className="ticket__data">{getDate(date, duration)}</p>
        </div>
        <div className="ticket__col">
            <p className="ticket__value">В пути</p>
            <p className="ticket__data">{getAllTime(duration)}</p>
        </div>
        <div className="ticket__col">
            <p className="ticket__value">{getStops(stops)}</p>
            <p className="ticket__data">
            {
                stops.map((el, index) =>
                <span key={index+el}>{el} </span>
                )
            }
            </p>
        </div>
        </div>
    )
}

export default TicketData